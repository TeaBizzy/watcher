SELECT cameras.id, name, path FROM cameras 
JOIN users ON user_id = users.id
WHERE user_id = $1