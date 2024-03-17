import { Module } from '@nestjs/common';
import { SpigotController } from './spigot.controller';
import { SpigotService } from './spigot.service';
import { RconService } from 'src/rcon/rcon.service';

@Module({
  imports: [],
  controllers: [SpigotController],
  providers: [SpigotService, RconService],
})
export class SpigotModule {}
