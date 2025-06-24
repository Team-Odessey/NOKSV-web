export interface ServerStatusType {
  status: "ONLINE" | "OFFLINE";
  onlinePlayer: number;
}
export const SERVER_STATUS: ServerStatusType = {
  status: "OFFLINE",
  onlinePlayer: 0
}