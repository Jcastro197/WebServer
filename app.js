const http = require('http');
const fs = require('fs');
const port = 5000;
const express = require('express');
const app = express();

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.static('public'));

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html',(err,data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('Error: File Not Found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// });

// server.listen(port,(err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(`Server is running on port ${port}`);
//     }
// });