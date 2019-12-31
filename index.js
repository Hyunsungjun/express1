// const express = require('express')
// const app = express()

// let port = 3000;
// let hostname = 'localhost'

// app.get('/', (req, res) => {
//     res.send('express test server 서버 온.')
// })
// app.listen(3000, () => {
//     console.log('3000번 포트에 서버가 연결되었습니다.  http://${hostname}:${port}/ 왜 안되지..?');
// })

// const question = function(req, res, next) {
//     if(req.param('answer')) {
//         next();
//     }else {
//         res.send('so what is your answer?')
//     }
// };
// const result = function(req,res) {
//     res.send('good')
// }

const express = require('express');
const app = express();

const question = function(req, res, next) {
    if(req.param('answer')) {
        next();
    }else {
        res.send('뭐가 답변?')
    }
};

const result = function(req,res) {
    res.send('조아')
}
app.get('/', question, result);
app.listen(3000);
console.log('서버온 http://localhost:3000/')