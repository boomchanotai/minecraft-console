import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { RconService } from './rcon.service';
import {
  RconPlayersResponse,
  RconSendCommandBody,
  RconSendCommandResponse,
  RconStatusResponse,
} from 'src/dto/rcon.dto';

@Controller('/rcon')
export class RconController {
  constructor(private readonly rconService: RconService) {}

  @Get('players')
  async getPlayers(): Promise<RconPlayersResponse> {
    return await this.rconService.getPlayers();
  }

  @Get('status')
  async getStatus(): Promise<RconStatusResponse> {
    return await this.rconService.getServerStatus();
  }

  @Post()
  async sendCommand(
    @Body() body: RconSendCommandBody,
  ): Promise<RconSendCommandResponse> {
    const { command } = body;
    if (!command) {
      throw new BadRequestException('Command is required');
    }

    return await this.rconService.sendCommand(command);
  }
}
