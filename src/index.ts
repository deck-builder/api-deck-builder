import express from 'express';
import yargs from 'yargs/yargs';

const argv = yargs(process.argv.slice(2)).options({
  port: { type: 'number', default: 3001, alias: 'p' },
})
.help()
.alias('help', 'h')
.parseSync();

const app = express();
const PORT = argv.port;
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
