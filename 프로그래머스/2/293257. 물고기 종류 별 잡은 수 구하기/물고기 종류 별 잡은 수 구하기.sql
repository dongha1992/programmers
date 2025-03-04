-- 코드를 작성해주세요
SELECT COUNT(*) AS FISH_COUNT, fni.FISH_NAME as FISH_NAME
FROM FISH_INFO fi
inner join FISH_NAME_INFO fni on fni.FISH_TYPE=fi.FISH_TYPE
GROUP BY fi.FISH_TYPE, fni.FISH_NAME
ORDER BY FISH_COUNT DESC