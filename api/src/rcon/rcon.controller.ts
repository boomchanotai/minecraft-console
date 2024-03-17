import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { RconService } from './rcon.service';
import { RconSendCommandBody } from 'src/dto/rcon.dto';

@Controller('/rcon')
export class RconController {
  constructor(private readonly rconService: RconService) {}

  @Get('players')
  async getPlayers(): Promise<string> {
    return await this.rconService.sendCommand('list');
  }

  @Post()
  async sendCommand(@Body() body: RconSendCommandBody): Promise<string> {
    const { command } = body;
    if (!command) {
      throw new BadRequestException('Command is required');
    }

    return await this.rconService.sendCommand(command);
  }
}
