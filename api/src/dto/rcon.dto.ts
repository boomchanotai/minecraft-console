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

export type {
  RconSendCommandBody,
  RconSendCommandResponse,
  RconStatusResponse,
};
