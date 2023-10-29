import axios from "axios";

test.skip("Deve cadastrar usuario", async function () {
	await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: '131235ddrfff5',
		}
	});
});
	
test.skip("Deve cadastrar Pet", async function () {
	await axios({
		url: "http://localhost:3030/CadastroPet",
		method: "post",
		data: {
			nomePet: "Billy",   
			raca: "mmmm",
			sexo: "Macho",
			cor: "Branco",
			porte: "P",
			id: 1
		}
	});
});

test.skip("Deve retornar upselling", async function () {
	await axios({
		url: "http://localhost:3030/ServicoUpselling?id_dog=2",
		method: "get" 
	});
});
test.skip("Deve retornar cachoros", async function () {
	await axios({
		url: "http://localhost:3030/CachorrosTutor?id_tutor=1",
		method: "get"
	});
});
test.skip("Agendar banho", async function () {
	await axios({
		url: "http://localhost:3030/AgendarBanho",
		method: "post",  
		data: {
			id_pet: 1,
			dia: '27/10/2023',
			horario: '8:50',
			week: 1,
			servicos: [5, 3, 6]
		}
	});
});

test.skip("Deve cadastrar banhista", async function () {
	await axios({
		url: "http://localhost:3030/CadastroBanhista",
		method: "post",
		data: {
			nome: "Deborah"
		}
	});
});

test.skip("Deve alocar banhista", async function () {
	await axios({
		url: "http://localhost:3030/AlocaBanhista",
		method: "post",
		data: {
			week: 2,
			day: 'qua',
			employeeID: 1
		}
	});
});

test.skip("Deve mostrar horarios disponíveis", async function() {
	await axios({
		url: "http://localhost:3030/HorariosDisponiveisDia?week=2&day=qua&id_pet=2",
		method: "get",
	});
});

test.skip("Deve mostrar alocacao", async function() {
	const alocacao = await axios({
		url: "http://localhost:3030/OrganizacaoSemana?week=2",
		method: "get"
	});
	console.log(alocacao)
});
test("Deve finalizar ordem de servico", async function() {
	await axios({
		url: "http://localhost:3030/FinalizaOrdemDeServico?id_ordem=2",
		method: "get"
	});
});
test.skip("Deve testar ServiceOrders", async function() {
	await axios({
		url: "http://localhost:3030/ServiceOrders?week=1&day=seg&id_user=2",
		method: "get",
	});
});


test.skip("Deve testar RetornaBanhistas", async function() {
	await axios({
		url: "http://localhost:3030/RetornaBanhistas",
		method: "get",
	});
});