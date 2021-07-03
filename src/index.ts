import express from 'express';
import yargs from 'yargs/yargs';
import cors from 'cors';

import api from './modules/api';

const argv = yargs(process.argv.slice(2)).options({
  port: { type: 'number', default: 3001, alias: 'p' },
})
.help()
.alias('help', 'h')
.parseSync();

const PORT = argv.port;

const app = express();
app.use(cors());

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
