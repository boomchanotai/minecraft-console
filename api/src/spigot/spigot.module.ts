import { Module } from '@nestjs/common';
import { SpigotController } from './spigot.controller';
import { SpigotService } from './spigot.service';

@Module({
  imports: [],
  controllers: [SpigotController],
  providers: [SpigotService],
})
export class SpigotModule {}
