import {Client} from 'pg';

const credential = {
  user: process.env.pguser,
  host: process.env.pghost,
  database: process.env.pgdb,
  password: process.env.pgpassword,
  port: 5432,
}

const client = new Client(credential)
client.connect()

export default client;