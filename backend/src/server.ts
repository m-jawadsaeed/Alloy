// import routes from "./routes";

// import { errorMiddleware } from "./middleware/error.middleware";

// import swaggerUi from "swagger-ui-express";

// import { swaggerSpec } from "./docs/swagger";
// import helmet from "helmet";

// app.use(
//   helmet({
//     crossOriginEmbedderPolicy: false,
//   }),
// );

// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use("/api", routes);

// app.use(errorMiddleware);
// app.use(corsConfig);

import http from "http";

import { app } from "./app";

import { env } from "./config/env";

import { initSocket } from "./sockets";

const server = http.createServer(app);

initSocket(server);

server.listen(env.PORT, () => {
  console.log(`Server running on ${env.PORT}`);
});
