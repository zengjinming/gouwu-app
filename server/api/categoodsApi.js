const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 查询商品
router.get('/selectGoods1', (req, res) => {
    let sqlStr = sql.goods.select1;
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
router.get('/selectGoods2', (req, res) => {
    let sqlStr = sql.goods.select2;
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
router.get('/selectGoods3', (req, res) => {
    let sqlStr = sql.goods.select3;
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
router.get('/selectGoods4', (req, res) => {
    let sqlStr = sql.goods.select4;
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
router.get('/selectGoods5', (req, res) => {
    let sqlStr = sql.goods.select5;
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
router.get('/selectGoods6', (req, res) => {
    let sqlStr = sql.goods.select6;
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
router.get('/selectGoods7', (req, res) => {
    let sqlStr = sql.goods.select7;
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
router.get('/selectGoods8', (req, res) => {
    let sqlStr = sql.goods.select8;
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
router.get('/selectGoods9', (req, res) => {
    let sqlStr = sql.goods.select9;
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
router.get('/selectGoods10', (req, res) => {
    let sqlStr = sql.goods.select10;
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


module.exports = router;