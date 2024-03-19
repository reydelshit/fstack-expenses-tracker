import mysql from 'mysql';

export const databaseConnection: mysql.Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fstack-expenses',
  });
  

   