import { format } from "date-fns";

export const getTime = () => format(new Date(Date.now()), "HH:mm");
export const getDate = () => format(new Date(Date.now()), "do MMMM yyyy");
