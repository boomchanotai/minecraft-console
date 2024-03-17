import { Module } from '@nestjs/common';
import { RconController } from './rcon.controller';
import { RconService } from './rcon.service';

@Module({
  imports: [],
  controllers: [RconController],
  providers: [RconService],
})
export class RconModule {}
