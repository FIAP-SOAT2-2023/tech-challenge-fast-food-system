const mysql = require('mysql');

module.exports = () => {

    const {DB_HOST, DB_USER, DB_PASS, DB_SCHEMA} = process.env

    // Configuração da conexão com o banco de dados
    const connection = mysql.createConnection({
        host:  DB_HOST, 
        user: DB_USER, 
        password: DB_PASS,
        database: DB_SCHEMA, 
    });

    // Conecta-se ao banco de dados
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            return;
        }
        console.log('Conexão com BANCO MYSQL estabelecida com sucesso!');
    })

    return connection
}

