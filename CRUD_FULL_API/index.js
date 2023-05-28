const port = 8080;
const app = require('./app');

app.listen(port,()=> {console.log("Server is started and running on",port)});
