import { Injectable } from '@nestjs/common';
import {
  RconPlayersResponse,
  RconSendCommandResponse,
  RconStatusResponse,
} from 'src/dto/rcon.dto';
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

  async getPlayers(): Promise<RconPlayersResponse> {
    const res = await this.sendCommand('list');

    if (res.message == '') {
      return {
        status: false,
        players: 0,
        maxPlayers: 0,
      };
    }

    const players = Number(
      res.message.split(' ')[2].replace('§c', '').replace('§6', ''),
    );
    const maxPlayers =
      Number(res.message.split(' ')[6].replace('§c', '').replace('§6', '')) ||
      Number(res.message.split(' ')[7].replace('§c', '').replace('§6', ''));

    return {
      status: true,
      players: players,
      maxPlayers: maxPlayers,
    };
  }

  async getServerStatus(): Promise<RconStatusResponse> {
    return rconOnlineStatus();
  }
}
