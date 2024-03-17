import {
  RconSendCommandDto,
  RconServerOnlineStatusDto,
} from "@/types/rcon.dto";
import axios from "axios";

const sendCommand = async (command: string) => {
  const res = await axios.post<RconSendCommandDto>(
    `${import.meta.env.VITE_API_URL}/rcon`,
    {
      command,
    }
  );

  return res.data;
};

const serverOnlineStatus = async () => {
  const res = await axios.get<RconServerOnlineStatusDto>(
    `${import.meta.env.VITE_API_URL}/rcon/status`
  );

  return res.data;
};

export { sendCommand, serverOnlineStatus };
