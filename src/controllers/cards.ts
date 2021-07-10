import { Request, Response } from 'express';
import mtgClient from '../modules/mtgClient';

export const getCards = async (req: Request, res: Response) => {
  try {
    const response = await mtgClient.get('/cards', { params: { name: req.query.name }});
    
    return res.status(200).send(response.data.cards)
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
