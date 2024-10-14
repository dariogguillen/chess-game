import socketio from "socket.io-client"; // import connection function
import { backendUrl } from "./utils/config.default";

const socket = socketio.connect(backendUrl); // initialize websocket connection

export default socket;
