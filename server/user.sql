SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS test;
#创建新的数据库，设置存储编码
CREATE DATABASE test CHARSET=UTF8;
#进入该数据库
USE test;
#创建保存部门数据的表
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) CHARACTER SET utf8,
  age VARCHAR(8) CHARACTER SET utf8);

CREATE TABLE login(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30) CHARACTER SET utf8,
  phone VARCHAR(30) CHARACTER SET utf8,
  possword VARCHAR(15) CHARACTER SET utf8);

CREATE TABLE categorygoods1(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods2(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods3(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods4(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods5(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods6(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods7(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods8(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods9(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE categorygoods10(
  cid INT(11) PRIMARY KEY AUTO_INCREMENT,
  cateid INT(11) NOT NULL,
  goodname VARCHAR(100) CHARACTER SET utf8,
  goodimg CHAR(100) CHARACTER SET utf8
);
CREATE TABLE miaos(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  mname VARCHAR(100) CHARACTER SET utf8,
  mdes VARCHAR(200) CHARACTER SET utf8,
  mimg CHAR(50) CHARACTER SET utf8,
  mprice1 CHAR(20) CHARACTER SET utf8,
  mprice2 CHAR(20) CHARACTER SET utf8
  
);

CREATE TABLE xinps(
  xid INT PRIMARY KEY AUTO_INCREMENT,
  xname VARCHAR(100) CHARACTER SET utf8,
  xdes VARCHAR(200) CHARACTER SET utf8,
  ximg CHAR(50) CHARACTER SET utf8,
  xprice1 CHAR(20) CHARACTER SET utf8
  
);
CREATE TABLE goods(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  gname VARCHAR(100) CHARACTER SET utf8,
  gdes VARCHAR(200) CHARACTER SET utf8,
  gimg CHAR(50) CHARACTER SET utf8,
  gprice CHAR(20) CHARACTER SET utf8,
  gdct CHAR(20) CHARACTER SET utf8,
  gcheck CHAR(20) CHARACTER SET utf8,
  gnum INT(11) NOT NULL
  
);



INSERT INTO categorygoods1 VALUES (1, 1, '居家好物', '13.png');
INSERT INTO categorygoods1 VALUES (2,  1, '空调', '14.png');
INSERT INTO categorygoods1 VALUES (3,  1, '智能手表', '15.png');
INSERT INTO categorygoods1 VALUES (4,  1, '耳机', '16.png');
INSERT INTO categorygoods1 VALUES (5,  1, '电视机', '17.png');
INSERT INTO categorygoods1 VALUES (6,  1, '行李箱', '18.png');
INSERT INTO categorygoods1 VALUES (7,  1, '灯具', '19.png');
INSERT INTO categorygoods1 VALUES (8,  1, '亲子时光', '20.png');
INSERT INTO categorygoods1 VALUES (9,  1, '运动健身', '21.png');
INSERT INTO categorygoods1 VALUES (10,  1, '回购榜单', '22.png');
INSERT INTO categorygoods1 VALUES (11,  1, '装修好物', '23.png');
INSERT INTO categorygoods1 VALUES (12, 1, '夏日解暑', '24.png');
INSERT INTO categorygoods2 VALUES (1, 2, '淋浴花洒', '25.png');
INSERT INTO categorygoods2 VALUES (2, 2, '浴霸吊顶', '26.png');
INSERT INTO categorygoods2 VALUES (3, 2, '马桶', '27.png');
INSERT INTO categorygoods2 VALUES (4, 2, '水槽', '28.png');
INSERT INTO categorygoods2 VALUES (5, 2, '厨卫龙头', '29.png');
INSERT INTO categorygoods2 VALUES (6, 2, '厨卫收纳', '30.png');
INSERT INTO categorygoods2 VALUES (7, 2, '饮水工具', '31.png');
INSERT INTO categorygoods2 VALUES (8, 2, '浴室柜', '32.png');
INSERT INTO categorygoods2 VALUES (9, 2, '浴缸', '33.png');
INSERT INTO categorygoods2 VALUES (10, 2, '门窗地板吊顶', '34.png');
INSERT INTO categorygoods2 VALUES (11, 2, '客厅家具', '35.png');
INSERT INTO categorygoods2 VALUES (12, 2, '儿童家具', '36.png');

INSERT INTO xinps VALUES(1,'台湾绿柠檬萃取液',"台湾原产天然绿柠檬 每瓶含100颗柠檬萃取，1分钟速成柠檬水",'xin1.jpg','269');
  INSERT INTO xinps VALUES(2,'秒秒测内衣消毒机',"三重除菌，多模式选择，一机多用，免打孔壁挂式",'xin2.jpg','599');
  INSERT INTO xinps VALUES(3,"真无线蓝牙耳机","真无线立体声，戴上即听，摘下就停，拿起自动回连，支持无线充电",'xin3.jpg','229');
  INSERT INTO xinps VALUES(4,'棉羊皮皮克夹',"法国设计，立领有型，时尚百搭",'xin4.jpg','899');
  
  INSERT INTO miaos VALUES(1,'全自动机械手表',"",'miao5.jpg','930','2080');
  INSERT INTO miaos VALUES(2,'迷你无线烫熨机',"",'miao6.jpg','99','199');
  INSERT INTO miaos VALUES(3,'洋仔绒牛仔外套',"",'miao7.jpg','159','299');
  INSERT INTO miaos VALUES(4,'云米无线吸尘器',"",'miao8.jpg','799','1299');

  INSERT INTO goods VALUES(1,'Apple/苹果 10.2 英寸 iPad 7 平板电脑','视网膜显示屏，内置摄像头，触控ID，便于携带','goods1.webp','2999','特价','false',1);
  INSERT INTO goods VALUES(2,'美国Calvin Klein凯文克莱FREE 自由男士 淡香水 100ml','木质芳香调 清新明亮 带来一种随性自信与独立','goods2.webp','216','特价','false',1);
  INSERT INTO goods VALUES(3,'Apple/苹果 10.2 英寸 iPad 7 平板电脑','视网膜显示屏，内置摄像头，触控ID，便于携带','goods3.webp','2999',"",'false',1);
  INSERT INTO goods VALUES(4,'Apple/苹果 10.2 英寸 iPad 7 平板电脑','视网膜显示屏，内置摄像头，触控ID，便于携带','goods3.webp','2999',"",'false',1);
  INSERT INTO goods VALUES(5,'美国Calvin Klein凯文克莱FREE 自由男士 淡香水 100ml','木质芳香调 清新明亮 带来一种随性自信与独立','goods5.webp','216',"特价",'false',1);
  INSERT INTO goods VALUES(6,'Apple/苹果 10.2 英寸 iPad 7 平板电脑','视网膜显示屏，内置摄像头，触控ID，便于携带','goods1.webp','2999','特价','false',1);
  INSERT INTO goods VALUES(7,'美国Calvin Klein凯文克莱FREE 自由男士 淡香水 100ml','木质芳香调 清新明亮 带来一种随性自信与独立','goods2.webp','216','特价','false',1);
  INSERT INTO goods VALUES(8,'SNK NEOGEO游戏机 迷你街机','SNK40周年纪念 拳皇怀旧游戏机 可投','goods6.webp','199','特价','false',1);
  INSERT INTO goods VALUES(9,'叮零智能视频门铃 增强版','小爱音箱互动，变声对讲，超长续航','goods7.webp','269','特价','false',1);
  INSERT INTO goods VALUES(10,'美国Calvin Klein凯文克莱FREE 自由男士 淡香水 100ml','木质芳香调 清新明亮 带来一种随性自信与独立','goods2.webp','216','特价','false',1);
  INSERT INTO goods VALUES(11,'美国Calvin Klein凯文克莱FREE 自由男士 淡香水 100ml','木质芳香调 清新明亮 带来一种随性自信与独立','goods2.webp','216','特价','false',1);

-- #插入数据
-- INSERT INTO user VALUES('zeng','18');
-- INSERT INTO user VALUES('xiaoming','19');
-- INSERT INTO user VALUES('xiaoqi','20');
-- INSERT INTO user VALUES('xiaohong','21');

