require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor escoitando no porto', app.get('port'));
}

main();