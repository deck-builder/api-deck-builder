import { Request, Response } from 'express';
import mtgClient from '../modules/mtgClient';

export const getCards = async (req: Request, res: Response) => {
  try {
    const data = await mtgClient.get('/cards');
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
