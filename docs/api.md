Method	Endpoint	                        Fungsi	                            Auth
POST	/auth/register	                    Daftar                              ❌
POST	/auth/login	                        Login, return JWT	                ❌
GET	    /auth/me	                        Data user saat ini	                ✅
GET	    /projects	                        Daftar project milik/diikuti saya	✅
POST	/projects	                        Buat project	                    ✅
GET	    /projects/:id	                    Detail project	                    ✅ member
PATCH	/projects/:id	                    Edit project	                    ✅ owner
DELETE	/projects/:id	                    Hapus project	                    ✅ owner
POST	/projects/:id/members	            Tambah member	                    ✅ owner
DELETE	/projects/:id/members/:userId	    Hapus member	                    ✅ owner
GET	    /projects/:id/tasks	                Daftar task (filter ?status=)	    ✅ member
POST	/projects/:id/tasks	                Buat task	                        ✅ member
PATCH	/tasks/:id	                        Edit task / ubah status	            ✅ member
DELETE	/tasks/:id	                        Hapus task	                        ✅ member
GET	    /tasks/:id/comments	                Daftar komentar	                    ✅ member
POST	/tasks/:id/comments	                Tambah komentar	                    ✅ member