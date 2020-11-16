const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 查询商品
router.get('/selectMiao', (req, res) => {
    let sqlStr = sql.homegoods.select1;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});
router.get('/selectXin', (req, res) => {
    let sqlStr = sql.homegoods.select2;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

router.get('/selectTui', (req, res) => {
    let sqlStr = sql.homegoods.select3;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

router.post('/selectDetail', (req, res) => {
    let sqlStr = sql.detailgoods.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.iid], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

router.post('/selectCart', (req, res) => {
    let sqlStr = sql.detailgoods.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.cid], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
    conn.end();
});

module.exports = router;