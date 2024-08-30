-- 1.	Создайте функцию, которая принимает кол-во сек и форматирует их в кол-во дней, часов, минут и секунд.
-- Пример: 123456 ->'1 days 10 hours 17 minutes 36 seconds '
DROP PROCEDURE IF EXISTS times;

DELIMITER $$
CREATE PROCEDURE times(seconds INT)
BEGIN
  DECLARE days INT;
  DECLARE hours INT;
  DECLARE minutes INT;
  DECLARE seconds_output INT;
  
  SET days = FLOOR(seconds / (60 * 60 * 24));
  SET hours = FLOOR((seconds / (60 * 60)) % 24);
  SET minutes = FLOOR((seconds / 60) % 60);
  SET seconds_output = seconds % 60;
  
  SELECT CONCAT(days, ' days ', hours, ' hours ', minutes, ' minutes ', seconds_output, ' seconds') AS `duration`;
END$$
DELIMITER ;

CALL times(123456);

-- 2.	Выведите только четные числа от 1 до 10 включительно. (Через функцию / процедуру)
-- Пример: 2,4,6,8,10 (можно сделать через шаг +  2: х = 2, х+=2)

DELIMITER $$

DROP PROCEDURE IF EXISTS get_even_numbers;

CREATE PROCEDURE get_even_numbers()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE even_numbers VARCHAR(100) DEFAULT '';

    WHILE i <= 10 DO
        IF i % 2 = 0 THEN
            SET even_numbers = CONCAT(even_numbers, i, ', ');
        END IF;
        SET i = i + 1;
    END WHILE;

    SELECT TRIM(TRAILING ', ' FROM even_numbers);
END $$

DELIMITER ;

CALL get_even_numbers();