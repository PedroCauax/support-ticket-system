import { Router } from "express";
import { createTicket, getTickets } from "../controllers/ticket.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createTicket);
router.get("/", authMiddleware, getTickets);

export default router;