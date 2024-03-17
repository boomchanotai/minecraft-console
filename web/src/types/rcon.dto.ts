interface RconSendCommandDto {
  status: boolean;
  message: string;
}

interface RconServerOnlineStatusDto {
  status: boolean;
}

export type { RconSendCommandDto, RconServerOnlineStatusDto };
