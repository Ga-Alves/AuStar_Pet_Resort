CREATE SCHEMA IF NOT EXISTS app;

GRANT INSERT, SELECT, UPDATE, DELETE ON ALL TABLES IN SCHEMA app TO postgres;

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
	nome 	text,
	raca	text,
	sexo	text,
	cor		text,
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
	nome			text,
	dia				date,
	horarios		int[]
);

CREATE TABLE app.OrdemServico (
	id_ordem		serial primary key,
	id_pet			int,
	foreign key (id_pet) references app.Pet (id_pet),
	id_banhista		int,
	foreign key (id_banhista) references app.Banhista (id_banhista),
	finalizacao 	int[],
	servicos 		int[],
	total			numeric(5, 2),
	data			date,
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



INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Tosa higiênica', 10, 'Marque a Tosa Higiência para seu dog ficar com o pelo na régua!', 'Todos', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho Clareador', 10, 'Para seu dog deixar de ser amarelado, o Banho Clareador devolve o branco ao pelo do seu Pet!', 'Todos', 'Branco');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Hidratação', 20, 'Para seu dog ficar com o pelo macio e brilhante de arrasar a Hidratação é a melhor opção!', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Queratinização', 25, 'Para seu dog ficar com o pelo resistente, à prova de balas, escolha a Queratinização!', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho volumizante', 25, 'Por ser uma raça de pelo volumoso seu dog ficará mais charmoso(a) com nosso banho volumezante.', 'Todos-', 'Todos');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho tonalizante', 25, 'Se seu dog estiver desbotado, o Banho Tonalizante resolve seu problema!', 'Todos-', 'Branco');
INSERT INTO app.ServicosUpselling (nome, preco, dica, raca, cor) VALUES ('Banho Xtreme', 25, 'Se seu dog estiver muito sujo, marque um Banho Xtreme!', 'Todos', 'Todos');
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (0, 'Lacinho', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (1, 'Gravatinha', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (2, 'Bandana', 30);
INSERT INTO app.Finalizacoes (id_finalizacao, nome, preco) VALUES (3, 'Perfume', 30);
INSERT INTO app.User (notifyToken) VALUES ('131235690ddifrfff5');
INSERT INTO app.User (notifyToken) VALUES ('131235690ddifrfff6');
INSERT INTO app.Pet (nome, raca, sexo, cor, porte, id_tutor) VALUES ('bilu', 'Pug', 'macho', 'Branco', 'p', 1);
INSERT INTO app.Pet (nome, raca, sexo, cor, porte, id_tutor) VALUES ('Lili', 'Yorkshire', 'femea', 'Amarelo', 'p', 1);
INSERT INTO app.Banhista (nome) VALUES ('Deborah');
INSERT INTO app.OrdemServico (id_pet, id_banhista, finalizacao, servicos, total, data, horario, completo) VALUES (1, 1, '{1,2,3}', '{1,2,3}', 50, '2023-10-30', '8:00', false);
INSERT INTO app.OrdemServico (id_pet, id_banhista, finalizacao, servicos, total, data, horario, completo) VALUES (1, 1, '{3}', '{1,3}', 50, '2023-10-30', '8:50', false);
INSERT INTO app.OrdemServico (id_pet, id_banhista, finalizacao, servicos, total, data, horario, completo) VALUES (1, 1, '{1}', '{2,3}', 50, '2023-10-30', '9:40', false);
INSERT INTO app.agenda (id_banhista, nome, dia, horarios) VALUES (1, 'Deborah', '2023-10-30', '{0,1,2,3,4,6,7,8,9}');
INSERT INTO app.agenda (id_banhista, nome, dia, horarios) VALUES (1, 'Deborah', '2023-10-29', '{0,1,2,3,4,6,7,8,9}');



/*
Consertar dps
Hidratação $20 - Todos menos Spitz e Jack Russel
Queratinização $25 - Todos menos Spitz e Jack Russel
Banho volumizante $25 - Todas as raças de pelo fluffy ex: poodle, spitz
Banho tonalizante $25 - Pretos ou brancos
Banho Xtreme $10 - Todas as raças muito sujas
*/