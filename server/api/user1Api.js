const express = require('express');
const router = express.Router();

const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

// 增加用户
router.post('/add1User', (req, res) => {
    let params = req.body;
    if (params.username == '' || params.password == '' || params.phone == '') {
        return res.json({ status: 1, msg: '不能为空,请输入相应的内容' });
    } else {
        let sqlSel = sql.user1.select;
        let params = req.body;
        let conn = new DBHelper().getConn();
        conn.query(sqlSel, [params.phone], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                if (result.length !== 0) {
                    return res.json({ status: 1, msg: '该用户名已经存在',result })
                } else {
                    let params = req.body;
                    if ((/^1\d{10}$/).test(params.phone)) {
                        let sqlStr = sql.user1.add;
                        let params = req.body;
                        let conn = new DBHelper().getConn();
                        conn.query(sqlStr, [params.username, params.phone, params.possword], (err, result) => {
                            if (err) {
                                res.json(err);
                            } else {
                                return res.json({ status: 2, msg: '用户注册成功' });
                            }
                        });
                    } else {
                        return res.json({ status: 1, msg: '手机格式不正确，重新输入' })
                    }
                }
            }
        });
        conn.end();
    }

});

// 查询用户
router.post('/select1User', (req, res) => {
    let params = req.body;
    if (params.password == '' || params.phone == '') {
        return res.json({ status: 1, msg: '不能为空,请输入相应的内容' });
    } else {
        let params = req.body;
        if ((/^1\d{10}$/).test(params.phone)) {
            let sqlStr = sql.user1.select1;
            let params = req.body;
            let conn = new DBHelper().getConn();
            conn.query(sqlStr, [params.phone], (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    if(!result.length){
                        // return res.json(result);
                        req.session.username=params.name;
                        return res.json({ status: 1, msg: '该用户未注册',result })
                    }else{
                        // [ RowDataPacket { password: '123', username: 'admin', id: 1 }]
                        return res.json({ status: 2, msg: '登录成功' });
                        
                    }
                }
            });
            conn.end();
        }else{
            return res.json({status:1,msg:'手机格式不正确'});
        }
    }

});

/* router.post('/add1User', (req, res) => {
    let sqlStr = sql.user1.add;
    let sqlSel=sql.user1.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlSel,[params.username],(err,result)=>{
        if(err){
            res.json(err);
        }else{
            if(result.length!==0){
                return res.json({ status: 1, msg: '该用户名已经存在' })
            }else{
                conn.query(sqlStr, [params.username, params.phone,params.possword], (err, result) => {
                    if (err) {
                        res.json(err);
                    } else {
                            return res.json({ status: 2, msg: '用户注册成功' })
                        // res.json(result);
                    }
                });
            }
        }
    })
    
    conn.end();
}); */


module.exports = router;