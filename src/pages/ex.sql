select note.note_title,note.note_id as note_id,note.user_user_id,user_name,
(select count(task_name) from task where note_note_id=note_id) as tasknumber 
from note,user where user.user_id=note.user_user_id
and(user_user_id=1 or note_id in (select note_note_id from share where user_user_id=1)) 
group by note_id desc;