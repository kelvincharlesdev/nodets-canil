import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('Home Page no COntroller');
};
export const dogs = (req: Request, res: Response) => {
  res.send('Dogs Page no Controller');
};
export const cats = (req: Request, res: Response) => {
  res.send('Cats Page no Controller');
};
export const fishes = (req: Request, res: Response) => {
  res.send('Fishes Page no Controller');
};
