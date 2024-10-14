const socketUrl = "ws://localhost:8000/ws/reservas/";

let socket: WebSocket | null = null;
export const connectWebSocket = () => {
  if (!socket) {
    socket = new WebSocket(socketUrl);
  }
  return socket;
};
