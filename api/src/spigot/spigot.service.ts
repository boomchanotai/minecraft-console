import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { rcon } from 'src/utils/rcon';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import {
  SpigotStartServerResponse,
  SpigotStopServerResponse,
} from 'src/dto/spigot.dto';

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

  async stopServer(): Promise<SpigotStopServerResponse> {
    await rcon.send('stop');
    return {
      status: true,
      message: 'Server stopped',
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
