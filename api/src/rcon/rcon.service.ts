import { Injectable } from '@nestjs/common';
import { RconSendCommandResponse, RconStatusResponse } from 'src/dto/rcon.dto';
import { rcon, rconConnect, rconOnlineStatus } from 'src/utils/rcon';

@Injectable()
export class RconService {
  async sendCommand(command: string): Promise<RconSendCommandResponse> {
    await rconConnect();

    const res = await rcon.send(command);
    return {
      status: true,
      message: res,
    };
  }

  async getServerStatus(): Promise<RconStatusResponse> {
    return rconOnlineStatus();
  }
}
