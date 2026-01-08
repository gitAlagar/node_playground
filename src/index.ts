import { createServer, IncomingMessage, ServerResponse } from "http";

export const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const responseBody = {
    message: "Node TypeScript server running!",
    path: req.url,
    method: req.method,
  };

  console.log("Response:", responseBody);

  res.end(JSON.stringify(responseBody));
});

const PORT = 5000;

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
