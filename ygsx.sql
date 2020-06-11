/*
 Navicat Premium Data Transfer

 Source Server         : 阿里
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : 47.97.24.36:3306
 Source Schema         : ygsx

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 11/06/2020 19:12:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product_list
-- ----------------------------
DROP TABLE IF EXISTS `product_list`;
CREATE TABLE `product_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pname` varchar(250) DEFAULT NULL,
  `pmiaosu` varchar(250) DEFAULT NULL,
  `pcprice` float(10,2) unsigned DEFAULT NULL,
  `phprice` float(10,2) unsigned DEFAULT NULL,
  `guige` varchar(50) DEFAULT NULL,
  `url` varchar(250) DEFAULT NULL,
  `urls` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1015 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_list
-- ----------------------------
BEGIN;
INSERT INTO `product_list` VALUES (1001, '【基地直发】江中食疗蛋蛋匠养元蛋30枚', '温氏蛋场直供 好营养吃出来', 62.90, 59.90, '1.6kg', 'https://img14.yiguoimg.com/d/items/2020/200324/9288740158711928_300.jpg', 'https://img09.yiguoimg.com/d/items/2020/200324/9288740158875768_500.jpg,http://img11.yiguoimg.com/d/items/2020/200324/9288740158744696_500.jpg,https://img14.yiguoimg.com/d/items/2020/200324/9288740158777464_500.jpg,https://img14.yiguoimg.com/d/items/2020/200324/9288740158810232_500.jpg');
INSERT INTO `product_list` VALUES (1002, '原膳皖南山坡散养土鸡蛋（15枚装）', '坡地散养 鲜香滑嫩美味营养', 22.80, NULL, '600g', 'https://img06.yiguoimg.com/e/web/170508/094924/170508094924178_104337_300.jpg', 'https://img10.yiguoimg.com/d/items/2018/180806/9288727806584070_500.jpg,https://img14.yiguoimg.com/e/items/2016/161207/9288699233149319_500.jpg,https://img09.yiguoimg.com/e/items/2016/161207/9288699233083783_500.jpg');
INSERT INTO `product_list` VALUES (1003, '安徽麻鸭咸鸭蛋70g*8', '自有鸭场，原料新鲜，质量好，蛋白比较白', 25.80, NULL, '8个', 'https://img10.yiguoimg.com/d/items/2020/200429/9288740306233501_300.jpg', 'https://img10.yiguoimg.com/d/items/2020/200429/9288740306331805_500.jpg,https://img13.yiguoimg.com/d/items/2020/200429/9288740306266269_500.jpg,https://img12.yiguoimg.com/d/items/2020/200429/9288740306299037_500.jpg');
INSERT INTO `product_list` VALUES (1004, '高邮咸鸭蛋65g*6', '地方特产，多油好口感，咸香适中', 19.90, NULL, '390g', 'https://img14.yiguoimg.com/d/items/2020/200330/9288740184696958_300.jpg', 'https://img14.yiguoimg.com/d/items/2020/200330/9288740184762494_500.jpg,https://img10.yiguoimg.com/d/items/2020/200330/9288740184631422_500.jpg,https://img13.yiguoimg.com/d/items/2020/200330/9288740184664190_500.jpg,https://img11.yiguoimg.com/d/items/2020/200330/9288740184729726_500.jpg');
INSERT INTO `product_list` VALUES (1005, '安徽麻鸭咸鸭蛋70g*20', '自家鸭场产的鲜蛋，原料新鲜质量好', 59.90, NULL, '1.4kg', 'https://img11.yiguoimg.com/d/items/2020/200429/9288740306593949_300.jpg', 'https://img10.yiguoimg.com/d/items/2020/200429/9288740306659485_500.jpg,https://img12.yiguoimg.com/d/items/2020/200429/9288740306561181_500.jpg,https://img09.yiguoimg.com/d/items/2020/200429/9288740306626717_500.jpg');
INSERT INTO `product_list` VALUES (1006, '【基地直发】御康有机鸡蛋30枚1.2kg', '林间散养 营养丰富', 68.00, NULL, '1.2kg', 'https://img10.yiguoimg.com/d/items/2020/200306/9288740057688166_300.jpg', 'https://img14.yiguoimg.com/d/items/2020/200306/9288740057819238_500.jpg,https://img12.yiguoimg.com/d/items/2020/200306/9288740057720934_500.jpg,https://img12.yiguoimg.com/d/items/2020/200306/9288740057753702_500.jpg,https://img12.yiguoimg.com/d/items/2020/200306/9288740057786470_500.jpg');
INSERT INTO `product_list` VALUES (1007, '高邮村双黄咸鸭蛋礼盒装80g*10', '颗颗双黄精挑细选，双倍蛋黄双倍油量', 99.90, NULL, '800g', 'https://img09.yiguoimg.com/d/items/2020/200407/9288740226902151_300.jpg', 'https://img09.yiguoimg.com/d/items/2020/200407/9288740226934919_500.jpg,https://img10.yiguoimg.com/d/items/2020/200407/9288740226869383_500.jpg,https://img11.yiguoimg.com/d/items/2020/200407/9288740226836615_500.jpg');
INSERT INTO `product_list` VALUES (1008, '安徽麻鸭咸鸭蛋70g*10', '自有养殖场，自家鸭产的蛋，原料新鲜', 29.90, NULL, '700g', 'https://img09.yiguoimg.com/d/items/2020/200429/9288740305938589_300.jpg', 'https://img11.yiguoimg.com/d/items/2020/200429/9288740306004125_500.jpg,https://img14.yiguoimg.com/d/items/2020/200429/9288740305905821_500.jpg,https://img14.yiguoimg.com/d/items/2020/200429/9288740305971357_500.jpg');
INSERT INTO `product_list` VALUES (1009, '【产地直发】九珠鸳鸯蛋30枚1.1kg', '吉祥双宝组合15个咸蛋+15个皮蛋', 109.00, NULL, '30枚', 'https://img10.yiguoimg.com/d/items/2020/200414/9288740249479310_300.jpg', 'https://img09.yiguoimg.com/d/items/2020/200414/9288740249577614_500.jpg,https://img11.yiguoimg.com/d/items/2020/200414/9288740249413774_500.jpg,https://img14.yiguoimg.com/d/items/2020/200414/9288740249446542_500.jpg,https://img14.yiguoimg.com/d/items/2020/200414/9288740249512078_500.jpg');
INSERT INTO `product_list` VALUES (1010, '高邮咸鸭蛋礼盒装65g*20', '地方特产，多油口感好，精美礼盒包装', 65.90, NULL, '1.3kg', 'https://img10.yiguoimg.com/d/items/2020/200330/9288740185614462_300.jpg', 'https://img12.yiguoimg.com/d/items/2020/200330/9288740185712766_500.jpg,https://img09.yiguoimg.com/d/items/2020/200330/9288740185548926_500.jpg,https://img10.yiguoimg.com/d/items/2020/200330/9288740185581694_500.jpg,https://img13.yiguoimg.com/d/items/2020/200330/9288740185647230_500.jpg');
INSERT INTO `product_list` VALUES (1011, '高邮咸鸭蛋65g*10', '地方特产，多油好口感，咸香适中', 29.90, NULL, '650g', 'https://img14.yiguoimg.com/d/items/2020/200330/9288740185024638_300.jpg', 'https://img13.yiguoimg.com/d/items/2020/200330/9288740185122942_500.jpg,https://img12.yiguoimg.com/d/items/2020/200330/9288740184991870_500.jpg,https://img10.yiguoimg.com/d/items/2020/200330/9288740185057406_500.jpg,https://img11.yiguoimg.com/d/items/2020/200330/9288740185090174_500.jpg');
INSERT INTO `product_list` VALUES (1012, '【基地直发】蛋蛋匠鲜鸡蛋1.4kg30枚', '看得见的鲜 值得放心的选择', 39.90, NULL, '1.4kg', 'https://img11.yiguoimg.com/d/items/2020/200309/9288740071843945_300.jpg', 'https://img13.yiguoimg.com/d/items/2020/200309/9288740071778409_500.jpg,https://img12.yiguoimg.com/d/items/2020/200312/9288740086294636_500.jpg,https://img13.yiguoimg.com/d/items/2020/200309/9288740071811177_500.jpg,https://img09.yiguoimg.com/d/items/2020/200306/9288740055558246_500.jpg');
INSERT INTO `product_list` VALUES (1013, '【基地直发】蛋蛋匠皮蛋30枚', '晶莹溏心 流滑爽口 无铅工艺', 49.90, 45.90, '1.6kg', 'https://img09.yiguoimg.com/d/items/2020/200324/9288740159367288_300.jpg', 'https://img14.yiguoimg.com/d/items/2020/200324/9288740159400056_500.jpg,https://img11.yiguoimg.com/d/items/2020/200324/9288740159301752_500.jpg,https://img09.yiguoimg.com/d/items/2020/200324/9288740159334520_500.jpg');
INSERT INTO `product_list` VALUES (1014, '原膳皖南山坡散养土鸡蛋(6枚装)', '蛋白Q弹 烹饪香醇不腥', 9.90, NULL, '6枚', 'https://img07.yiguoimg.com/e/web/170302/212627/170302212627471_104363_300.jpg', 'https://img10.yiguoimg.com/d/items/2018/180712/9288725974721772_500.jpg,https://img05.yiguoimg.com/e/web/151010/134300/151010134300080_104363_500.jpg,https://img08.yiguoimg.com/e/web/151010/134300/151010134300782_104363_500.jpg');
COMMIT;

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) DEFAULT NULL,
  `upassword` varchar(50) DEFAULT NULL,
  `tell` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
BEGIN;
INSERT INTO `register` VALUES (1005, 'root', '5567e474e6f24e44d17a33f3252e0840765fd216', '15312695091', '1172432352@qq.com', '2020-06-11 08:39:00');
INSERT INTO `register` VALUES (1006, 'zhangsan', 'fa2b033e76aab1659673852dcb8258fe7256226f', '15312695091', '1172432352@qq.com', '2020-06-11 17:30:14');
COMMIT;

-- ----------------------------
-- Table structure for sy_list1
-- ----------------------------
DROP TABLE IF EXISTS `sy_list1`;
CREATE TABLE `sy_list1` (
  `pid` bigint(20) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list1
-- ----------------------------
BEGIN;
INSERT INTO `sy_list1` VALUES (1, 'https://img06.yiguoimg.com/d/others/200416/9288740255246480.jpg');
INSERT INTO `sy_list1` VALUES (2, 'https://img05.yiguoimg.com/d/others/200325/9288740163594361.jpg');
INSERT INTO `sy_list1` VALUES (3, 'https://img07.yiguoimg.com/d/others/181120/9288734317061492.jpg');
INSERT INTO `sy_list1` VALUES (4, 'https://img06.yiguoimg.com/d/others/191022/9288739392431958.jpg');
INSERT INTO `sy_list1` VALUES (5, 'https://img06.yiguoimg.com/d/others/200416/9288740255344784.jpg');
INSERT INTO `sy_list1` VALUES (6, 'https://img05.yiguoimg.com/d/others/181120/9288734317520244.jpg');
INSERT INTO `sy_list1` VALUES (7, 'https://img06.yiguoimg.com/d/others/200325/9288740163496057.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list2
-- ----------------------------
DROP TABLE IF EXISTS `sy_list2`;
CREATE TABLE `sy_list2` (
  `pid` bigint(20) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list2
-- ----------------------------
BEGIN;
INSERT INTO `sy_list2` VALUES (1, 'https://img05.yiguoimg.com/d/others/181218/9288735686239634.jpg');
INSERT INTO `sy_list2` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734323910004.jpg');
INSERT INTO `sy_list2` VALUES (3, 'https://img05.yiguoimg.com/d/others/181120/9288734323942772.jpg');
INSERT INTO `sy_list2` VALUES (4, 'https://img06.yiguoimg.com/d/others/181120/9288734323975540.jpg');
INSERT INTO `sy_list2` VALUES (5, 'https://img06.yiguoimg.com/d/others/181120/9288734324041076.jpg');
INSERT INTO `sy_list2` VALUES (6, 'https://img07.yiguoimg.com/d/others/181120/9288734324073844.jpg');
INSERT INTO `sy_list2` VALUES (7, 'https://img05.yiguoimg.com/d/others/181120/9288734324106612.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list3
-- ----------------------------
DROP TABLE IF EXISTS `sy_list3`;
CREATE TABLE `sy_list3` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list3
-- ----------------------------
BEGIN;
INSERT INTO `sy_list3` VALUES (1, 'https://img07.yiguoimg.com/d/others/181218/9288735686272402.jpg');
INSERT INTO `sy_list3` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734316832116.jpg');
INSERT INTO `sy_list3` VALUES (3, 'https://img06.yiguoimg.com/d/others/181120/9288734303364468.jpg');
INSERT INTO `sy_list3` VALUES (4, 'https://img07.yiguoimg.com/d/others/181120/9288734303626612.jpg');
INSERT INTO `sy_list3` VALUES (5, 'https://img05.yiguoimg.com/d/others/181120/9288734304085364.jpg');
INSERT INTO `sy_list3` VALUES (6, 'https://img05.yiguoimg.com/d/others/181120/9288734304216436.jpg');
INSERT INTO `sy_list3` VALUES (7, 'https://img07.yiguoimg.com/d/others/200416/9288740255312016.jpg');
INSERT INTO `sy_list3` VALUES (8, 'https://img05.yiguoimg.com/e/others/160420/9288693612060820.jpg');
INSERT INTO `sy_list3` VALUES (9, 'https://img07.yiguoimg.com/e/others/160329/9288693154226301.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list4
-- ----------------------------
DROP TABLE IF EXISTS `sy_list4`;
CREATE TABLE `sy_list4` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list4
-- ----------------------------
BEGIN;
INSERT INTO `sy_list4` VALUES (1, 'https://img06.yiguoimg.com/d/others/181218/9288735686403474.jpg');
INSERT INTO `sy_list4` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734297433460.jpg');
INSERT INTO `sy_list4` VALUES (3, 'https://img05.yiguoimg.com/d/others/181120/9288734297531764.jpg');
INSERT INTO `sy_list4` VALUES (4, 'https://img07.yiguoimg.com/d/others/191111/9288739511281515.jpg');
INSERT INTO `sy_list4` VALUES (5, 'https://img05.yiguoimg.com/d/others/181120/9288734298056052.jpg');
INSERT INTO `sy_list4` VALUES (6, 'https://img07.yiguoimg.com/d/others/181120/9288734298121588.jpg');
INSERT INTO `sy_list4` VALUES (7, 'https://img06.yiguoimg.com/d/others/181120/9288734298154356.jpg');
INSERT INTO `sy_list4` VALUES (8, 'https://img07.yiguoimg.com/e/others/151106/9288689588215654.jpg');
INSERT INTO `sy_list4` VALUES (9, 'https://img05.yiguoimg.com/e/others/151116/9288689776533360.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list5
-- ----------------------------
DROP TABLE IF EXISTS `sy_list5`;
CREATE TABLE `sy_list5` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list5
-- ----------------------------
BEGIN;
INSERT INTO `sy_list5` VALUES (1, 'https://img07.yiguoimg.com/d/others/181218/9288735686534546.jpg');
INSERT INTO `sy_list5` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734298416500.jpg');
INSERT INTO `sy_list5` VALUES (3, 'https://img07.yiguoimg.com/d/others/181120/9288734298449268.jpg');
INSERT INTO `sy_list5` VALUES (4, 'https://img07.yiguoimg.com/d/others/181120/9288734298482036.jpg');
INSERT INTO `sy_list5` VALUES (5, 'https://img06.yiguoimg.com/d/others/181120/9288734298613108.jpg');
INSERT INTO `sy_list5` VALUES (6, 'https://img06.yiguoimg.com/e/others/160613/9570169801515213.png');
COMMIT;

-- ----------------------------
-- Table structure for sy_list6
-- ----------------------------
DROP TABLE IF EXISTS `sy_list6`;
CREATE TABLE `sy_list6` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list6
-- ----------------------------
BEGIN;
INSERT INTO `sy_list6` VALUES (1, 'https://img05.yiguoimg.com/d/others/181218/9288735686567314.jpg');
INSERT INTO `sy_list6` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734298875252.jpg');
INSERT INTO `sy_list6` VALUES (3, 'https://img06.yiguoimg.com/d/others/181120/9288734299334004.jpg');
INSERT INTO `sy_list6` VALUES (4, 'https://img07.yiguoimg.com/d/others/181120/9288734299399540.jpg');
INSERT INTO `sy_list6` VALUES (5, 'https://img05.yiguoimg.com/d/others/181120/9288734299563380.jpg');
INSERT INTO `sy_list6` VALUES (6, 'https://img06.yiguoimg.com/d/others/181120/9288734299596148.jpg');
INSERT INTO `sy_list6` VALUES (7, 'https://img05.yiguoimg.com/d/others/181120/9288734299497844.jpg');
INSERT INTO `sy_list6` VALUES (8, 'https://img07.yiguoimg.com/e/others/151104/9288689523662692.jpg');
INSERT INTO `sy_list6` VALUES (9, 'http://img05.yiguoimg.com/e/others/170208/9288700927287880.jpg');
INSERT INTO `sy_list6` VALUES (10, 'https://img05.yiguoimg.com/e/others/160222/9288692501618774.jpg');
INSERT INTO `sy_list6` VALUES (11, 'https://img05.yiguoimg.com/e/others/160219/9288692473241683.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list7
-- ----------------------------
DROP TABLE IF EXISTS `sy_list7`;
CREATE TABLE `sy_list7` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list7
-- ----------------------------
BEGIN;
INSERT INTO `sy_list7` VALUES (1, 'https://img07.yiguoimg.com/d/others/181218/9288735686600082.jpg');
INSERT INTO `sy_list7` VALUES (2, 'https://img06.yiguoimg.com/d/others/181120/9288734306772340.jpg');
INSERT INTO `sy_list7` VALUES (3, 'https://img07.yiguoimg.com/d/others/181120/9288734306870644.jpg');
INSERT INTO `sy_list7` VALUES (4, 'https://img05.yiguoimg.com/d/others/181120/9288734306936180.jpg');
INSERT INTO `sy_list7` VALUES (5, 'https://img06.yiguoimg.com/d/others/181120/9288734307001716.jpg');
INSERT INTO `sy_list7` VALUES (6, 'https://img07.yiguoimg.com/e/others/170221/9288701232128597.jpg');
INSERT INTO `sy_list7` VALUES (7, 'https://img06.yiguoimg.com/e/others/160621/9288695009779925.jpg');
COMMIT;

-- ----------------------------
-- Table structure for sy_list8
-- ----------------------------
DROP TABLE IF EXISTS `sy_list8`;
CREATE TABLE `sy_list8` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `purl` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy_list8
-- ----------------------------
BEGIN;
INSERT INTO `sy_list8` VALUES (1, 'https://img07.yiguoimg.com/d/others/181218/9288735686698386.jpg');
INSERT INTO `sy_list8` VALUES (2, 'https://img05.yiguoimg.com/d/others/181120/9288734307624308.jpg');
INSERT INTO `sy_list8` VALUES (3, 'https://img07.yiguoimg.com/d/others/181120/9288734307657076.jpg');
INSERT INTO `sy_list8` VALUES (4, 'https://img05.yiguoimg.com/d/others/181120/9288734307788148.jpg');
INSERT INTO `sy_list8` VALUES (5, 'https://img05.yiguoimg.com/d/others/181120/9288734307984756.jpg');
INSERT INTO `sy_list8` VALUES (6, 'https://img06.yiguoimg.com/d/others/181120/9288734308115828.jpg');
INSERT INTO `sy_list8` VALUES (7, 'https://img06.yiguoimg.com/d/others/181120/9288734308214132.jpg');
INSERT INTO `sy_list8` VALUES (8, 'https://img05.yiguoimg.com/e/others/151008/9288686653382472.jpg');
INSERT INTO `sy_list8` VALUES (9, 'https://img07.yiguoimg.com/e/others/151023/9570164236722007.png');
INSERT INTO `sy_list8` VALUES (10, 'https://img05.yiguoimg.com/e/others/151222/9288691261546390.jpg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
