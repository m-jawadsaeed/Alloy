import http from "http";

import { app } from "./app";

import { env } from "./config/env";

import { initSocket } from "./sockets";
import { logger } from "./shared/logger/logger";

const server = http.createServer(app);

initSocket(server);

server.listen(env.PORT, () => {
  logger.info(`Server running on ${env.PORT}`);
});
