-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 08 2020 г., 17:50
-- Версия сервера: 5.6.43
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `students_org`
--
CREATE DATABASE IF NOT EXISTS `students_org` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `students_org`;

-- --------------------------------------------------------

--
-- Структура таблицы `committee`
--

CREATE TABLE `committee` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `coordinator` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `num_active_members` int(11) NOT NULL,
  `last_meeting_date` date NOT NULL,
  `archive_link` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `num_members` int(11) NOT NULL,
  `activity_level` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `committee`
--

INSERT INTO `committee` (`id`, `name`, `coordinator`, `num_active_members`, `last_meeting_date`, `archive_link`, `num_members`, `activity_level`) VALUES
(1, 'логістика', 'Мельник Денис Олександрович', 10, '2020-01-03', 'https:stud-organization/committe/logistic', 22, 'середній'),
(2, 'дизайн', 'Бугай Олександр Олександрович', 8, '2019-11-03', 'https:stud-organization/committe/design', 17, 'середній'),
(3, 'PR', 'Якімцев Денис Іванович', 7, '2020-02-03', 'https:stud-organization/committe/pr', 10, 'середній'),
(4, 'IT', 'Гриценюк Олесь Васильович', 5, '2020-02-23', 'https:stud-organization/committe/it', 8, 'середній'),
(5, 'HR', 'Омельченко Остап Дмитрович', 11, '2020-01-19', 'https:stud-organization/committe/hr', 17, 'середній');

-- --------------------------------------------------------

--
-- Структура таблицы `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `main_organizer` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `num_participants` int(11) NOT NULL,
  `location` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `num_orginizers` int(11) NOT NULL,
  `main_partner` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `estimate` int(11) NOT NULL,
  `topic` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `events`
--

INSERT INTO `events` (`id`, `name`, `date`, `main_organizer`, `num_participants`, `location`, `num_orginizers`, `main_partner`, `estimate`, `topic`) VALUES
(1, 'Літні курси ', '2018-10-05', 'Маслянко Тарас Денис', 24, '\'\'Квадрат\'\'', 15, 'Kyivstar', 30000, '80-ті'),
(2, 'Ярмарок Кар\'єри', '2018-10-05', 'Парфілов Дмитро Євгенович', 100, 'Хол 2 корпусу ВНТУ', 17, 'Kyivstar', 5000, '80-ті'),
(3, 'Інженерні  змагання', '2018-10-05', 'Явіцька Світлана Аркадіївна', 55, 'Бібліотека ВНТУ', 20, 'Kyivstar', 10000, '80-ті'),
(4, 'Тренінги ', '2018-10-05', 'Маслянко Тарас Денис', 60, 'Бібліотека ВНТУ', 7, 'Kyivstar', 3000, '80-ті'),
(5, 'Літні курси ', '2018-10-05', 'Коротка Ольга Петрівна', 24, '\'\'Артинов\'\'', 16, 'Kyivstar', 28000, '80-ті');

-- --------------------------------------------------------

--
-- Структура таблицы `event_participants`
--

CREATE TABLE `event_participants` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `birth_date` date NOT NULL,
  `address` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `student_group` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `specialty` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `questionnaire_link` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `event` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `faculty_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `event_participants`
--

INSERT INTO `event_participants` (`id`, `full_name`, `birth_date`, `address`, `student_group`, `specialty`, `questionnaire_link`, `event`, `faculty_name`) VALUES
(1, 'Суворов Євген Володимирович', '2000-03-03', 'м.Вінниця вул. Келецька 98', '2КН-16Б', 'Комп\'ютерні науки', 'student-org/participants/ankets/17.doc', 'Інженерні змагання', 'ФІТКІ'),
(2, 'Бугай Олександр Олександрович', '1998-04-02', 'м.Вінниця вул. Келецька 102', '2КІ-16Б', 'Комп\'ютерна інженерія ', 'student-org/participants/ankets/11.doc', 'Інженерні змагання', 'ФІТКІ'),
(3, 'Сніжук Катерина Сергіївна', '1999-11-03', 'м.Вінниця вул. Воїнів Інтернаціоналістів 32', '2БС-18Б', 'Кібербезпека', 'student-org/participants/ankets/22.doc', 'Інженерні змагання', 'ФІТКІ'),
(4, 'Канаєв Дмитро Євгенович', '2000-11-03', 'м.Вінниця вул. Келецька 98', '1ІСТ-17Б', 'Системний аналіз', 'student-org/participants/ankets/25.doc', 'Інженерні змагання', 'ФАКСА'),
(5, 'Суворов Євген Володимирович', '2000-03-03', 'м.Вінниця вул. Келецька 98', '2КН-16Б', 'Комп\'.терні науки', 'student-org/participants/ankets/21.doc', 'Інженерні змагання', 'ФІТКІ');

-- --------------------------------------------------------

--
-- Структура таблицы `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `scene_area` int(11) NOT NULL,
  `apparatus` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `wifi` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `location_area` int(11) NOT NULL,
  `seats_place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `location`
--

INSERT INTO `location` (`id`, `name`, `address`, `price`, `scene_area`, `apparatus`, `wifi`, `location_area`, `seats_place`) VALUES
(1, 'Артинов', 'м. Вінниця вул. Миколи Оводова, 22', '2200', 15, 'так', 'так', 40, 50),
(2, 'ВНТУ 2 корпус холл', 'м. Вінниця вул. Миколи Оводова, 22', '0', 5, 'так', 'ні', 50, 0),
(3, 'Квадрат', 'м. Вінниця вул. Миколи Оводова, 22', '800', 15, 'так', 'так', 50, 60),
(4, 'Офіс Stealkiwi', 'м. Вінниця вул. Миколи Оводова, 22', '0', 10, 'частково', 'так', 100, 100),
(5, 'Архіклуб', 'м. Вінниця вул. Миколи Оводова, 22', '700', 5, 'ні', 'частково', 30, 40),
(6, 'Артинов', 'м. Вінниця вул. Миколи Оводова, 22', '1700', 15, 'так', 'так', 40, 50);

-- --------------------------------------------------------

--
-- Структура таблицы `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `english_level` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `committee` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_joining` date NOT NULL,
  `age` int(11) NOT NULL,
  `status` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `members`
--

INSERT INTO `members` (`id`, `full_name`, `date_of_birth`, `english_level`, `committee`, `date_of_joining`, `age`, `status`) VALUES
(1, 'Коваль Інна Василівна', '2000-08-20', 'А1', 'логістика', '2019-02-20', 18, 'стостерігач '),
(2, 'Корнієнко Сергій Артемович', '2000-08-20', 'B1', 'дизайн', '2020-04-01', 18, 'повноцінний член'),
(3, 'Маслянко Тарас Денисович', '2001-05-08', 'А2', 'PR', '2017-10-20', 19, 'новачок'),
(4, 'Маліновська Ірина Дмитрівна', '2001-08-13', 'B2', 'грант ', '2019-10-20', 22, 'повноцінний член'),
(5, 'Миклін Андрій Миколайович', '1999-05-20', 'C1', 'HR', '2018-10-20', 20, 'новачок');

-- --------------------------------------------------------

--
-- Структура таблицы `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `num_employees` int(11) NOT NULL,
  `hr_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `site_link` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `cooperation_event` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `specialty` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cooperation_date` date NOT NULL,
  `сooperation_type` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `partners`
--

INSERT INTO `partners` (`id`, `name`, `num_employees`, `hr_name`, `site_link`, `cooperation_event`, `specialty`, `cooperation_date`, `сooperation_type`) VALUES
(1, 'epam', 35000, 'Логунова Іванна Петрівна', 'https://www.epam-groр.org', 'Хакатон', 'IT', '2020-03-21', 'грошова підтримка'),
(2, 'eliftech', 700, 'Півун Антон Демидович', 'https://www.eliftech.com/', 'Хакатон', 'IT', '2019-04-21', 'виділення офіса як локації'),
(3, 'diacom', 8500, 'Катрук Богдан Миколайович', 'https://diacom-rus.ru/', 'Хакатон', 'IT', '2020-01-21', 'матеріальна підтримка'),
(4, 'privatbank', 6000, 'Сніжук Катерина Сергіївна', 'https://privatbank.ua/ru', 'Ярмарка кар\'єри', 'IT', '2019-09-21', 'грошова підтримка'),
(5, 'kyivstar', 11000, 'Любомир Антон Антонович', 'https://kyivstar.ua/ru/mm', 'Літні курси', 'IT', '2019-05-11', 'матеріальна підтримка');

-- --------------------------------------------------------

--
-- Структура таблицы `printery_production`
--

CREATE TABLE `printery_production` (
  `id` int(11) NOT NULL,
  `event` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `topic` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `num_production` int(11) NOT NULL,
  `manufacture_date` date NOT NULL,
  `printery` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `material` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `design_link` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `production_type` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `printery_production`
--

INSERT INTO `printery_production` (`id`, `event`, `topic`, `num_production`, `manufacture_date`, `printery`, `material`, `design_link`, `author`, `production_type`) VALUES
(1, 'Інженерні змагання', 'GTA', 27, '2018-11-19', '\"МЕД\"', 'синтетика', 'https:stud-organization/events/EBEC/2018/design', 'Руговий Андрій Олександрович', 'футболка'),
(2, 'Інженерні змагання', 'Сімпсони', 22, '2019-11-19', '\"Vndruk\"', 'синтетика', 'https:stud-organization/events/EBEC/2018/design', 'Канаєв Дмитро Євгенович', 'футболка'),
(3, 'Ярмарка кар\'єри', 'GTA', 10, '2017-05-19', '\"OKTO\"', 'фарфор', 'https:stud-organization/events/JF/2018/design', 'Очеретна Ольга Петрівна', 'чашка'),
(4, 'Літній курс', 'Назад в майбутнє', 30, '2019-11-19', '\"Клевер\"', 'пластик', 'https:stud-organization/events/SC/2018/design', 'Руговий Андрій Олександрович', 'бейджик'),
(5, 'Тренінги', 'Зоряні війни', 10, '2018-11-19', '\"МЕД\"', 'бумага', 'https:stud-organization/events/BTW/2018/design', 'Мельник Денис Олександрович', 'брошура');

-- --------------------------------------------------------

--
-- Структура таблицы `trainers`
--

CREATE TABLE `trainers` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `trainer_experience` int(11) NOT NULL,
  `english_level` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `working_experience` int(11) NOT NULL,
  `specialty` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `trainers`
--

INSERT INTO `trainers` (`id`, `full_name`, `age`, `email`, `phone`, `trainer_experience`, `english_level`, `working_experience`, `specialty`) VALUES
(1, 'Митруков Олег Олександрович', 28, 'borustymofiev@gmail.com', '+380932386947', 0, 'А2', 5, 'Менеджмент'),
(2, 'Омельченко Демид Михайлович', 33, 'oleshrytseniuk@gmail.com', '+380972568921', 1, 'В1', 8, 'English teacher'),
(3, 'Гриць Катерина Васильовівна', 24, 'katerunakovalieva@gmail.com', '+380965893654', 1, 'В2', 3, 'Frontend developer'),
(4, 'Руговий Андрій Олександрович', 25, 'vitalinabogunova@gmail.com', '+380635412382', 2, 'А1', 4, 'Designer'),
(5, 'Якімцев Дмитро Іванович', 31, 'tarasolexndrov@gmail.com', '+380935638496', 0, 'С1', 11, 'PR');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `committee`
--
ALTER TABLE `committee`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `event_participants`
--
ALTER TABLE `event_participants`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `printery_production`
--
ALTER TABLE `printery_production`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `trainers`
--
ALTER TABLE `trainers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `committee`
--
ALTER TABLE `committee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `event_participants`
--
ALTER TABLE `event_participants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `printery_production`
--
ALTER TABLE `printery_production`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `trainers`
--
ALTER TABLE `trainers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
