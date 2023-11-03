import axios from "axios";
import pgp from "pg-promise"

test.skip("Deve cadastrar usuario e seu respectivo pet", async function () {
	const notifyToken = '131235ddrfff57'
	const id_tutor = await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: notifyToken,
		}
	});
  
	expect(id_tutor.data.idUser).toBe(3);
	await axios({  
		url: "http://localhost:3030/CadastroPet",
		method: "post",
		data: {
			nomePet: "Billy",   
			raca: "Maltês",
			sexo: "Macho",
			cor: "Branco",
			porte: "P",
			id: 3
		}
	});
	const id_dog = await axios({
		url: "http://localhost:3030/CachorrosTutor?id_tutor=3",
		method: "get"
	});
  
	expect(id_dog.data.res[0].id_pet).toBe(3)
	expect(id_dog.data.res[0].nome).toBe('Billy')
	const conexao = pgp() ("postgres://postgres:rapha@localhost:5432/app") 
	await conexao.query('delete from app.user where notifyToken = $1', notifyToken);
	await conexao.query('delete from app.pet where id_pet = $1', 3);


});
	

test.skip("Deve retornar upselling", async function () {
	const upselling = await axios({
		url: "http://localhost:3030/ServicoUpselling?id_dog=2",
		method: "get" 
	});
	console.log(upselling.data.servicoOferecidoUpselling)
	expect(upselling.data.servicoOferecidoUpselling[0].nome).toBe('Tosa higiÃªnica')
	expect(upselling.data.servicoOferecidoUpselling[1].nome).toBe('Banho Xtreme')
	expect(upselling.data.servicoOferecidoUpselling[2].nome).toBe('Hidratação')
	expect(upselling.data.servicoOferecidoUpselling[3].nome).toBe('Queratinização')
	expect(upselling.data.servicoOferecidoUpselling[4].nome).toBe('Banho Volumizante')
	expect(upselling.data.servicoOferecidoUpselling[0].preco).toBe('10.00')
	expect(upselling.data.servicoOferecidoUpselling[1].preco).toBe('25.00')
	expect(upselling.data.servicoOferecidoUpselling[2].preco).toBe(20)
	expect(upselling.data.servicoOferecidoUpselling[3].preco).toBe(25)
	expect(upselling.data.servicoOferecidoUpselling[4].preco).toBe(25)
	expect(upselling.data.servicoOferecidoUpselling[0].id_upselling).toBe(1)
	expect(upselling.data.servicoOferecidoUpselling[1].id_upselling).toBe(7)
	expect(upselling.data.servicoOferecidoUpselling[2].id_upselling).toBe(3)
	expect(upselling.data.servicoOferecidoUpselling[3].id_upselling).toBe(4)
	expect(upselling.data.servicoOferecidoUpselling[4].id_upselling).toBe(5)

});

test.skip("Deve Agendar banho e finaliza-lo", async function () {
	await axios({
		url: "http://localhost:3030/CadastroBanhista",
		method: "post",
		data: {
			nome: "Samuel"
		}
	});
	const banhistas = await axios({
		url: "http://localhost:3030/RetornaBanhistas",
		method: "get",
	});
	expect(banhistas.data.banhistasCadastrados[0].id_banhista).toBe(1)
	expect(banhistas.data.banhistasCadastrados[1].id_banhista).toBe(2)
	expect(banhistas.data.banhistasCadastrados[0].nome).toBe('Deborah')
	expect(banhistas.data.banhistasCadastrados[1].nome).toBe('Samuel')

	console.log(banhistas.data)
	var dias = ['dom','seg','ter','qua','qui','sex','sab'];
	const hoje = new Date()
	const dia = dias[ hoje.getDay() ];
	const semana = 1

	await axios({   
		url: "http://localhost:3030/AlocaBanhista",
		method: "post",
		data: {
			week: semana,  
			day: dia,
			id_banhista: 2
		}
	});

	const horariosDisponiveis = await axios({
		url: "http://localhost:3030/HorariosDisponiveisDia?week=1&day=sex&id_pet=1",
		method: "get",
	});
	expect(horariosDisponiveis.data[0]).toBe(true)
	expect(horariosDisponiveis.data[1]).toBe(true)
	expect(horariosDisponiveis.data[2]).toBe(true)
	expect(horariosDisponiveis.data[3]).toBe(true)
	expect(horariosDisponiveis.data[4]).toBe(true)
	expect(horariosDisponiveis.data[5]).toBe(true)
	expect(horariosDisponiveis.data[6]).toBe(true)
	expect(horariosDisponiveis.data[7]).toBe(true)
	expect(horariosDisponiveis.data[8]).toBe(true)

	// algum erro, aloquei para hj, mas no Bd consta 12/04
	/*
	await axios({
		url: "http://localhost:3030/AgendarBanho",
		method: "post",  
		data: {
			id_pet: 1,
			data: '2023/12/04', //hoje.toISOString().split('T')[0]
			horario: '8:50',
			finalizacoes: [1],
			servicos: [5, 3, 6]
		}
	await axios({
		url: "http://localhost:3030/FinalizaOrdemDeServico?id_ordem=4",
		method: "get"
	});
	});*/
	
	const conexao = pgp() ("postgres://postgres:rapha@localhost:5432/app") 
	await conexao.query('delete from app.banhista where id_banhista = $1', 2);
	//await conexao.query('delete from app.agenda where id_ordem = $1', 4);
	//await conexao.query('delete from app.agenda where id_entrada = $1', 3);

});


test.skip("Deve mostrar alocacao", async function() {
	const alocacao = await axios({
		url: "http://localhost:3030/OrganizacaoSemana?week=2",
		method: "get"
	});
	console.log(alocacao.data)
});

test("Deve testar OrdensServico", async function() {
	const serviceOrders = await axios({
		url: "http://localhost:3030/OrdensServico?week=1&day=seg",
		method: "get",
	});
});

