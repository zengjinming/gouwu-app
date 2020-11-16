// sql语句
var sqlMap = {
    user: {
        // 添加用户
        add: 'insert into user(name, age) values (?, ?)',
        // 查询用户
        select: 'select * from user where name like "%"?"%"'
    },
    user1: {
        add: 'insert into login(username,phone,possword) values (?,?,?)',
        // select:'select * from login where phone like "%"?"%"'
        select: 'select phone from login where phone = ?',
        select1: 'select * from login where phone = ? '
        // select1:'select * from login'
    },
    goods:{
        select1: 'select * from categorygoods1',
        select2: 'select * from categorygoods2',
        select3: 'select * from categorygoods3',
        select4: 'select * from categorygoods4',
        select5: 'select * from categorygoods5',
        select6: 'select * from categorygoods6',
        select7: 'select * from categorygoods7',
        select8: 'select * from categorygoods8',
        select9: 'select * from categorygoods9',
        select10: 'select * from categorygood10'
    },
    homegoods:{
        select1:'select * from miaos',
        select2:'select * from xinps',
        select3:'select * from goods'
    },
    detailgoods:{
        select:'select * from goods where gid = ?'
    }
}

module.exports = sqlMap;