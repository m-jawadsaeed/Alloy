import { useEffect } from "react";

import { socket } from "../../sockets/socket";

import { queryClient } from "../../api/queryClient";

export const useDashboardSync = () => {
  useEffect(() => {
    socket.on("dashboard:update", () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    });

    return () => {
      socket.off("dashboard:update");
    };
  }, []);
};
