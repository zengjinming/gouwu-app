// node后端服务器
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');

const userApi = require('./api/userApi');
const user1Api=require('./api/user1Api');
const categoodsApi=require('./api/categoodsApi');
const homegoodsApi=require('./api/homegoodsApi');

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: false
}));

// 后端api路由
app.use('/api/user', userApi);
// 后端api路由
app.use('/api/user1',user1Api);
// 后端api路由
app.use('/api/goods',categoodsApi);
// 后端api路由
app.use('/api/homegoods',homegoodsApi);
app.use('/api/detailgoods',homegoodsApi)

// 启动监听
server.listen(8880, () => {
    console.log(' success!! port:8880')
})