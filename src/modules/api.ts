import express from 'express';

import cardsRouter from '../routes/cards';

const api = express();

api.use('/cards', cardsRouter);

export default api;
