-- INSERT INTO cardio ( total_time, Resistance_heartrate ) VALUES ( $1, $2 );
select * from workout_cardio 
where category = $1;