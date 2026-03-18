import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTicket = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const userId = (req as any).user.id;

  const ticket = await prisma.ticket.create({
    data: {
      title,
      description,
      userId,
    },
  });

  res.json(ticket);
};

export const getTickets = async (req: Request, res: Response) => {
  const tickets = await prisma.ticket.findMany();
  res.json(tickets);
};