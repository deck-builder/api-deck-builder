import mtgClient from '../modules/mtgClient';

const getCards = async (req, res) => {
  try {
    const data = await mtgClient.get('/cards');
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

export {
  getCards
};
