DELIMITER $

create function udf_average_alumni_grade_by_course_name(course_name VARCHAR(60)) 
RETURNS decimal (10,2)
deterministic
begin
	declare result decimal(10,2);
    set result :=(SELECT 
    AVG(sc.grade)
FROM courses c
JOIN students_courses sc ON c.id = sc.course_id
join students as s on sc.student_id= s.id
where c.name= course_name and s.is_graduated=1
GROUP BY c.id);
    return result;
end $

DELIMITER ;

SELECT c.name, udf_average_alumni_grade_by_course_name('Quantum Physics') as average_alumni_grade FROM courses c 
WHERE c.name = 'Quantum Physics';