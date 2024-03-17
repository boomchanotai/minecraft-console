interface RconSendCommandBody {
  command: string;
}

interface RconSendCommandResponse {
  status: boolean;
  message: string;
}

interface RconStatusResponse {
  status: boolean;
}

interface RconPlayersResponse {
  status: boolean;
  players: number;
  maxPlayers: number;
}

export type {
  RconSendCommandBody,
  RconSendCommandResponse,
  RconStatusResponse,
  RconPlayersResponse,
};
