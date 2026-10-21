Tabel	        Kolom
users	        id, name, email (unique), password_hash, created_at
projects	    id, name, description, owner_id → users, created_at
project_members id, project_id → projects, user_id → users, role (owner/member), unique(project_id, user_id)
tasks	        id, project_id → projects, title, description, status, priority, assignee_id → users (nullable), created_by → users, due_date, created_at
comments	    id, task_id → tasks, user_id → users, body, created_at