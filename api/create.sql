CREATE TABLE "User" (
	"id_tutor"	TEXT,
	"notify_token"	TEXT,
	PRIMARY KEY("id_tutor" AUTOINCREMENT)
);

CREATE TABLE "Pet" (
	"id_pet"	TEXT,
	"reca"	TEXT,
	"sexo"	TEXT,
	"cor"	TEXT,
	"porte"	TEXT,
	"id_tutor"	TEXT,
	PRIMARY KEY("id_pet" AUTOINCREMENT)
);