import { Injectable } from '@nestjs/common';
import { rcon, rconConnect } from 'src/utils/rcon';

@Injectable()
export class RconService {
  async sendCommand(command: string): Promise<string> {
    await rconConnect();

    const res = await rcon.send(command);
    return res;
  }
}
