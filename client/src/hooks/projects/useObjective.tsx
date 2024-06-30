import axios from "axios";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useObjective(pid: string, oid: string, room: string) {
  const onComplete = async () => {
    await axios.post(`${_api}/objectives/complete`, { pid, oid, room });
  };

  const onDelete = async () => {
    await axios.post(`${_api}/objectives/delete`, { pid, oid, room });
  };

  return { onComplete, onDelete };
}
