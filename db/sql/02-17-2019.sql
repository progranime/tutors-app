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

/*Table structure for table `academic_subjects` */

DROP TABLE IF EXISTS `academic_subjects`;

CREATE TABLE `academic_subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `hourly_rate` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `academic_subjects` */

insert  into `academic_subjects`(`id`,`name`,`hourly_rate`) values 
(1,'Mathematics',NULL),
(2,'English',NULL),
(3,'Physics',NULL);

/*Table structure for table `admission_test` */

DROP TABLE IF EXISTS `admission_test`;

CREATE TABLE `admission_test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `hourly_rate` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `admission_test` */

insert  into `admission_test`(`id`,`name`,`hourly_rate`) values 
(1,'UPCAT',NULL),
(2,'ACET',NULL),
(3,'DLSUCET',NULL);

/*Table structure for table `qualification_type` */

DROP TABLE IF EXISTS `qualification_type`;

CREATE TABLE `qualification_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `qualification_type` */

insert  into `qualification_type`(`id`,`name`) values 
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
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `cellphone` varchar(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `university_id` int(11) DEFAULT NULL,
  `is_activate` int(1) DEFAULT NULL,
  `token` longtext,
  `date_time_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_type_id` (`user_type_id`),
  KEY `university_id` (`university_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`university_id`) REFERENCES `university` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`id`,`first_name`,`last_name`,`email`,`password`,`cellphone`,`birth_date`,`user_type_id`,`university_id`,`is_activate`,`token`,`date_time_created`) values 
(34,'jeremy','espinosa','jeremyespinosa1995@gmail.com','123','123','0000-00-00',1,NULL,1,'fftpPScXUqBT9Gn2sjXqjlKL1ChkLl75','2019-02-17 15:11:46');

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
