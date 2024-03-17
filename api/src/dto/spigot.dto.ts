interface SpigotStartServerResponse {
  status: boolean;
  message: string;
}

interface SpigotStopServerResponse {
  status: boolean;
  message: string;
}

interface SpigotGetLogsResponse {
  status: boolean;
  error?: string;
  logs: string[];
}

export type {
  SpigotStartServerResponse,
  SpigotStopServerResponse,
  SpigotGetLogsResponse,
};
