import axios from "axios";

const startServer = async () => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/spigot/start`);
  return res.data;
};

const stopServer = async () => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/spigot/stop`);
  return res.data;
};

export { startServer, stopServer };
