import { Controller, Get, Post, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SpigotService } from './spigot.service';
import { MessageEvent } from 'src/dto/sse.dto';
import {
  SpigotGetLogsResponse,
  SpigotStartServerResponse,
  SpigotStopServerResponse,
} from 'src/dto/spigot.dto';

@Controller('/spigot')
export class SpigotController {
  constructor(private readonly spigotService: SpigotService) {}

  @Sse('console')
  async sendEvent(): Promise<Observable<MessageEvent>> {
    return await this.spigotService.getLogsRealtime();
  }

  @Get('/latest-logs')
  async getLogs(): Promise<SpigotGetLogsResponse> {
    return {
      status: true,
      logs: await this.spigotService.getLogs(),
    };
  }

  @Post('/start')
  async startServer(): Promise<SpigotStartServerResponse> {
    return await this.spigotService.startServer();
  }

  @Post('/stop')
  async stopServer(): Promise<SpigotStopServerResponse> {
    return await this.spigotService.stopServer();
  }
}
