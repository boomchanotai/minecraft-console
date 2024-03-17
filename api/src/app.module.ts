import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RconModule } from './rcon/rcon.module';
import { SpigotModule } from './spigot/spigot.module';

@Module({
  imports: [ConfigModule.forRoot(), RconModule, SpigotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
