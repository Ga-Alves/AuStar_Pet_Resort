CREATE TABLE app.User (
	id_tutor	serial primary key,
	notifyToken	text
	
);

CREATE TABLE app.Pet (
	nome text,
	raca	text,
	sexo	text,
	cor	text,
	porte	text,
	id_tutor	text,
	id_pet	serial primary key

);