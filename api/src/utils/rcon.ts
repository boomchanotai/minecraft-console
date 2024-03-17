import { BadRequestException } from '@nestjs/common';
import { Rcon } from 'rcon-client';
import * as dotenv from 'dotenv';
dotenv.config();

const rcon = new Rcon({
  host: process.env.RCON_HOST || 'localhost',
  port: Number(process.env.RCON_PORT) || 25575,
  password: process.env.RCON_PASSWORD || '',
});

const rconConnect = async () => {
  if (rcon.authenticated === false) {
    try {
      await rcon.connect();
    } catch (error) {
      throw new BadRequestException('Rcon failed to authenticate');
    }
  }

  return rcon;
};

export { rcon, rconConnect };
