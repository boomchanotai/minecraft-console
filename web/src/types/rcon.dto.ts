interface RconSendCommandDto {
  status: boolean;
  message: string;
}

interface RconServerOnlineStatusDto {
  status: boolean;
}

interface RconPlayersDto {
  status: boolean;
  players: number;
  maxPlayers: number;
}

export type { RconSendCommandDto, RconServerOnlineStatusDto, RconPlayersDto };
