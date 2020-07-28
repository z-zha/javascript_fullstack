/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80018
Source Host           : localhost:3306
Source Database       : myblog

Target Server Type    : MYSQL
Target Server Version : 80018
File Encoding         : 65001

Date: 2020-07-27 15:31:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `article_list`
-- ----------------------------
DROP TABLE IF EXISTS `article_list`;
CREATE TABLE `article_list` (
  `title` varchar(255) DEFAULT NULL,
  `article_id` int(11) NOT NULL,
  `content` text,
  `introduce` text,
  `add_time` date DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of article_list
-- ----------------------------
INSERT INTO `article_list` VALUES ('第一篇文章——我的git', '1', '阿西吧', '第一篇文章是关于git的使用。github对于程序员来说并不陌生，但我还是个行外人，以前使用git提交代码，后面出现了问题也没有解决掉，甚至还删库了，导致我好久好久不想再尝试使用它，现在又打算重拾代码，那还是做点程序员该做的事吧，有问题一个个解决，永远不要有畏难心理，其实当我真的成功提交了代码之后，真的发自心底地想说一句，不过如此。所以也希望我在之后的代码路上也能够克服自己的畏难情绪，人生没有白走的路，每一步都算数！~\n\n', '2020-07-10', '文章');
