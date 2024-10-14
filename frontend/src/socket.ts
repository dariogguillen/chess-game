import { io } from "socket.io-client"; // import connection function
import { backendUrl } from "./utils/config.default";

const socket = io(backendUrl); // initialize websocket connection

export default socket;
