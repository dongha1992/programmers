-- 코드를 입력하세요
SELECT ai.ANIMAL_ID, ai.NAME
FROM ANIMAL_INS ai
where INTAKE_CONDITION!='Aged'
ORDER BY ai.ANIMAL_ID ASC;