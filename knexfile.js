module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/dev.sqlite3'
    }.
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  }
};