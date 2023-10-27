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
	id_tutor	int,
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
	data_banhista_unico UNIQUE (dia, id_banhista)
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



INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Tosa higiênica', 10, 'Para seu dog ficar com o pelo na régua!', 'Todos', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho Clareador', 10, 'Para seu dog deixar de ser amarelado, devolvemos o branco ao pelo', 'Todos', 'Branco');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Hidratação', 20, 'Para seu dog ficar com o pelo macio e brilhante de arrasar', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Queratinização', 25, 'Para seu dog ficar com o pelo resistente, à prova de balas', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho volumizante', 25, 'Por ser uma raça de pelo volumoso seu dog ficará mais charmoso(a) com nosso banho volumezante.', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho tonalizante', 25, 'Pro seu dog deixar de ser desbotado', 'Todos-', 'Preto');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho tonalizante', 25, 'Pro seu dog deixar de ser desbotado', 'Todos-', 'Branco');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho Xtreme', 25, 'Se seu dog estiver muito sujo, essa é a opção certa', 'Todos', 'Todos');
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (0, 'Lacinho', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (1, 'Gravatinha', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (2, 'Bandana', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (3, 'Perfume', 30);


/*
Consertar dps
Hidratação $20 - Todos menos Spitz e Jack Russel
Queratinização $25 - Todos menos Spitz e Jack Russel
Banho volumizante $25 - Todas as raças de pelo fluffy ex: poodle, spitz
Banho tonalizante $25 - Pretos ou brancos
Banho Xtreme $10 - Todas as raças muito sujas
*/