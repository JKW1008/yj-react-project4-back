import "dotenv/config";
import "./db.js";
import express from "express";
import morgan from "morgan";
import rentalRouter from "./routers/rentalRoter.js";
import cors from "cors";

const PORT = 8080;
const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터로 보내기
app.use("/api/rental", rentalRouter);

const handleListening = () =>
  console.log(`😍Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);