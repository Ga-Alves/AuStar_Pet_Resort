-- Nomes estão inconsistentes entre os arquivos, precisamos ver o que temos que mudar
DROP table app.User;
DROP table app.OrdemServico;
DROP table app.Pet;
DROP table app.Banhista;
DROP table app.Agenda;
DROP table app.Finalizacoes;
DROP table app.ServicosUpselling;

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

CREATE TABLE app.Banhista (
	id_banhista		serial primary key,
	nome 			text
);

CREATE TABLE app.Agenda (
	id_entrada  	serial primary key,
	id_banhista		int,
	dia				date,
	horarios		int[],
	CONSTRAINT data_banhista_unico UNIQUE (data, id_banhista)
);

CREATE TABLE app.OrdemServico (
	id_ordem		serial primary key,
	id_pet			int,
	foreign key (id_pet) references app.Pet (id_pet),
	id_banhista		int,
	foreign key (id_banhista) references app.Banhista (id_banhista),
	servicos 		text[],
	total			text,
	dia				date,
	horario 		text,
	completo		boolean
);

CREATE TABLE app.Finalizacoes (	-- A gente vai manter as tabelas com nomes no plural ou no singular?
	id_finalizacao	int primary key,
	nome 			text,
	preco			numeric(5, 2)
);

CREATE TABLE app.ServicosUpselling (
	id_upselling	serial primary key,
	nome			text,
	preco			numeric(5, 2),
	dica 			text,
	raca			text,
	cor				text
);
