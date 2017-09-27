const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'development',
  host: 'localhost',
  database: 'development',
  password: 'development',
  port: 5432,
})

// test our connection
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.export = pool;
