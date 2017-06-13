-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-13 16:08:03
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course`
--

-- --------------------------------------------------------

--
-- 表的结构 `student`
--

CREATE TABLE `student` (
  `id` varchar(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `regular` float DEFAULT NULL,
  `project` float DEFAULT NULL,
  `final` float DEFAULT NULL,
  `total` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `student`
--

INSERT INTO `student` (`id`, `name`, `major`, `regular`, `project`, `final`, `total`) VALUES
('131220001', '1', '1', 0, 0, 0, 0),
('131220006', '6', '6', 0, 0, 0, 0),
('131220007', '7', '7', 0, 0, 0, 0),
('131220008', '8', '8', 0, 0, 0, 0),
('131220009', '9', '9', 0, 0, 0, 0),
('131220010', '10', '10', 0, 0, 0, 0),
('131220012', '12', '12', 0, 0, 0, 0),
('131220013', '13', '13', 0, 0, 0, 0),
('131220014', '14', '14', 0, 0, 0, 0),
('131220015', '15', '15', 0, 0, 0, 0),
('131220016', '16', '16', 0, 0, 0, 0),
('131220017', '17', '17', 0, 0, 0, 0),
('131220018', '18', '18', 0, 0, 0, 0),
('131220019', '19', '19', 0, 0, 0, 0),
('131220020', '20', '20', 0, 0, 0, 0),
('131220021', '21', '21', 0, 0, 0, 0),
('131220022', '22', '22', 0, 0, 0, 0),
('131220023', '23', '23', 0, 0, 0, 0),
('131220074', '???', '???', 12, 23, 45, 80),
('131220168', '168', '168', 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
