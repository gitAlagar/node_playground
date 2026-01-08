import { server } from "./index";
import * as http from "http";

const PORT = 5001;

server.listen(PORT, () => {
    console.log(`Debug server running on ${PORT}`);

    const req = http.get(`http://localhost:${PORT}`, (res) => {
        console.log(`Response status: ${res.statusCode}`);
        res.on("data", (chunk) => {
            console.log("Response body:", chunk.toString());
        });
        res.on("end", () => {
            server.close(() => {
                console.log("Server closed");
            });
        });
    });

    req.on("error", (e) => {
        console.error(`Problem with request: ${e.message}`);
        server.close();
    });
});
