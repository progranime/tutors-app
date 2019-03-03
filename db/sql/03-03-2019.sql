/*
SQLyog Ultimate v12.14 (64 bit)
MySQL - 10.1.35-MariaDB : Database - tutorme
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tutorme` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `tutorme`;

/*Table structure for table `academic` */

DROP TABLE IF EXISTS `academic`;

CREATE TABLE `academic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `academic` */

insert  into `academic`(`id`,`name`) values 
(1,'Mathematics'),
(2,'English'),
(3,'Physics');

/*Table structure for table `admission` */

DROP TABLE IF EXISTS `admission`;

CREATE TABLE `admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `admission` */

insert  into `admission`(`id`,`name`) values 
(1,'UPCAT'),
(2,'ACET'),
(3,'DLSUCET');

/*Table structure for table `gender` */

DROP TABLE IF EXISTS `gender`;

CREATE TABLE `gender` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `gender` */

insert  into `gender`(`id`,`name`) values 
(1,'Male'),
(2,'Female'),
(3,'Other');

/*Table structure for table `nationality` */

DROP TABLE IF EXISTS `nationality`;

CREATE TABLE `nationality` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `nationality` */

insert  into `nationality`(`id`,`name`) values 
(1,'Afghan'),
(2,'Albanian');

/*Table structure for table `qualification` */

DROP TABLE IF EXISTS `qualification`;

CREATE TABLE `qualification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `qualification` */

insert  into `qualification`(`id`,`name`) values 
(1,'Bachelors'),
(2,'Masters'),
(3,'Doctorate'),
(4,'Other');

/*Table structure for table `university` */

DROP TABLE IF EXISTS `university`;

CREATE TABLE `university` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `acronym` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `university` */

insert  into `university`(`id`,`name`,`acronym`) values 
(1,'University of the Philippines','UP'),
(2,'De La Salle University','DLSU'),
(3,'Ateneo de Manila University','ADMU'),
(4,'University of Santo Tomas','UST'),
(5,'Far Eastern University','FEU');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender_id` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `cellphone` varchar(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `nationality_id` int(11) DEFAULT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `university_id` int(11) DEFAULT NULL,
  `qualification_id` int(11) DEFAULT NULL,
  `course_title` varchar(255) DEFAULT NULL,
  `start_year` varchar(10) DEFAULT NULL,
  `end_year` varchar(10) DEFAULT NULL,
  `academic_id` int(11) DEFAULT NULL,
  `academic_rate` float DEFAULT NULL,
  `admission_id` int(11) DEFAULT NULL,
  `admission_rate` float DEFAULT NULL,
  `is_activate` int(1) DEFAULT NULL,
  `token` longtext,
  `date_time_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_type_id` (`user_type_id`),
  KEY `university_id` (`university_id`),
  KEY `gender_id` (`gender_id`),
  KEY `qualification_id` (`qualification_id`),
  KEY `nationality_id` (`nationality_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`),
  CONSTRAINT `user_ibfk_3` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`),
  CONSTRAINT `user_ibfk_4` FOREIGN KEY (`qualification_id`) REFERENCES `qualification` (`id`),
  CONSTRAINT `user_ibfk_5` FOREIGN KEY (`nationality_id`) REFERENCES `nationality` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`id`,`first_name`,`last_name`,`gender_id`,`email`,`password`,`cellphone`,`birth_date`,`nationality_id`,`user_type_id`,`university_id`,`qualification_id`,`course_title`,`start_year`,`end_year`,`academic_id`,`academic_rate`,`admission_id`,`admission_rate`,`is_activate`,`token`,`date_time_created`) values 
(53,'jeremy','espinosa',1,'jeremyespinosa1995@gmail.com','123','09196762277','2019-02-21',2,3,5,1,'Computer Science','2012','2016',NULL,NULL,NULL,NULL,1,'exWS7urrQ3KeEyKe6iLDmrq8fCzvcVMO','2019-03-03 13:36:22');

/*Table structure for table `user_type` */

DROP TABLE IF EXISTS `user_type`;

CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `user_type` */

insert  into `user_type`(`id`,`name`,`type`) values 
(1,'parent',NULL),
(2,'student',NULL),
(3,'tutor','student'),
(4,'tutor','graduated');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
