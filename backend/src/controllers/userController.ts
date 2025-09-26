import { Request, Response } from "express";
import UserService from "../services/userService.js";

export const getUsers = (req: Request, res: Response) => {
  const users = UserService.getAll();
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  const newUser = UserService.create(req.body);
  res.status(201).json(newUser);
};
