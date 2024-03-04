import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: userAuth._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUser", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userAuth]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
