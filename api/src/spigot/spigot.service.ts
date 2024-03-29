import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { SpigotStartServerResponse } from 'src/dto/spigot.dto';

@Injectable()
export class SpigotService {
  async startServer(): Promise<SpigotStartServerResponse> {
    exec(
      'cd server; nohup java -jar -Xms1G -Xmx2G -jar spigot-1.20.1.jar --nogui &',
    );
    return {
      status: true,
      message: 'Server started',
    };
  }

  async getLogs(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      fs.readFile('server/logs/latest.log', 'utf8', (err, data) => {
        if (err) {
          reject('Error reading file');
        }

        const logs = data
          .split('\n')
          .filter((line) => line !== '')
          .map((line) => line);

        resolve(logs);
      });
    });
  }

  async getLogsRealtime(): Promise<Observable<{ data: string[] }>> {
    let logs = await this.getLogs();
    return new Observable((observer) => {
      fs.watch('server/logs/latest.log', (event) => {
        if (event === 'change') {
          this.getLogs().then((newLogs) => {
            const newLines = newLogs.filter((line) => !logs.includes(line));
            logs = newLogs;
            observer.next({ data: newLines });
          });
        }
      });

      observer.next({ data: logs });
    });
  }
}
