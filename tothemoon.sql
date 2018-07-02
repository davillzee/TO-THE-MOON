-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 02, 2018 at 08:20 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tothemoon`
--

-- --------------------------------------------------------

--
-- Table structure for table `feature`
--

CREATE TABLE `feature` (
  `id_project` int(9) NOT NULL,
  `id_feature` int(9) NOT NULL,
  `feature_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `greentable`
--

CREATE TABLE `greentable` (
  `colum_id` varchar(50) NOT NULL,
  `username_id` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_feature` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `es_hour` int(11) NOT NULL,
  `real_hour` int(11) NOT NULL,
  `t_hour` varchar(15) NOT NULL,
  `last_date` varchar(15) NOT NULL,
  `status_work` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `greentable`
--

INSERT INTO `greentable` (`colum_id`, `username_id`, `id_project`, `id_feature`, `id_task`, `es_hour`, `real_hour`, `t_hour`, `last_date`, `status_work`) VALUES
('JE_2018-05-05', 1111, 5555, 1010, 0, 12, 12, '2018-05-05', '2018-05-07', 1),
('JE_2018-06-30', 1111, 5555, 1010, 1333, 7, 7, '2018-06-30', '2018-06-30', 1),
('BENZ_2018-05-07', 2222, 5555, 2020, 0, 6, 6, '2018-05-07', '2018-05-07', 1),
('BENZ_2018-05-07', 2222, 6666, 6020, 0, 10, 6, '2018-05-07', '2018-05-07', 1),
('AEY_2018-05-07', 3333, 5555, 5050, 0, 8, 0, '2018-05-07', '', 0),
('AEY_2018-05-08', 3333, 6666, 6010, 0, 8, 10, '2018-05-07', '2018-05-08', 1),
('AEY_2018-05-10', 3333, 6666, 6020, 0, 8, 6, '2018-05-08', '2018-05-08', 1);

-- --------------------------------------------------------

--
-- Table structure for table `menber`
--

CREATE TABLE `menber` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `passwords` int(11) NOT NULL,
  `position` varchar(250) NOT NULL,
  `telephone` int(10) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menber`
--

INSERT INTO `menber` (`id`, `username`, `name`, `nickname`, `passwords`, `position`, `telephone`, `status`) VALUES
(1111, 'je_dev', 'panupong sangchim', 'JE', 12345, 'backend', 1111111111, 1),
(2222, 'benz_zee', 'kittiphong kasrto', 'BENZ', 56789, 'frontend', 222222222, 0),
(3333, 'AEY', 'Chattida', 'AEY', 78945, 'ux/ui', 333333333, 0),
(4444, 'Nut_M', 'Nuttarika', 'Nut', 45682, 'ux/ui', 1235869745, 0);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `project_name` varchar(200) NOT NULL,
  `conceptual` varchar(500) NOT NULL,
  `hour` int(11) NOT NULL,
  `finish_hour` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `project_name`, `conceptual`, `hour`, `finish_hour`) VALUES
(0, 'benz', 'asr', 0, 0),
(5555, 'tothemoon', '', 450, 18),
(6666, 'tmb', '', 800, 26);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id_feature` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `task_name` varchar(200) NOT NULL,
  `id_project` int(12) NOT NULL,
  `Description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id_feature`, `id_task`, `task_name`, `id_project`, `Description`) VALUES
(1010, 1222, 'forgetpassword', 5555, ''),
(1010, 1333, 'register', 5555, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`id_feature`);

--
-- Indexes for table `greentable`
--
ALTER TABLE `greentable`
  ADD PRIMARY KEY (`username_id`,`id_project`,`id_feature`,`id_task`);

--
-- Indexes for table `menber`
--
ALTER TABLE `menber`
  ADD PRIMARY KEY (`id`,`username`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`,`project_name`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id_feature`,`id_task`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feature`
--
ALTER TABLE `feature`
  MODIFY `id_feature` int(9) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
