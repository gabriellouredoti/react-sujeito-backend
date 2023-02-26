import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import { router } from "./routes";

// usando swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);
app.use("/api/v1/", router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

// tratativa de erros nas rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		// se for instancia do tipo error
		return res.status(400).json({
			error: err.message,
		});
	}

	return res.status(500).json({
		status: "error",
		message: "Internal server error",
	});
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8081, () => console.log("server is running"));
