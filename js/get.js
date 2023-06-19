const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
});

    connection.query('SELECT * FROM ', (error, results) => {
        if (error) {
        throw error;
        }
  

    // todo add data to options

    connection.end();
    });