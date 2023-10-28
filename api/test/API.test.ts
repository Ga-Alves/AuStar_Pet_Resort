import axios from "axios";

test("Deve cadastrar usuario", async function () {
	await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: '131235ddfrfff5',
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
		url: "http://localhost:3030/ServicoUpselling",
		method: "get",
		data: {
			id_dog: 2

		}
	});
});
test.skip("Deve retornar cachoros", async function () {
	await axios({
		url: "http://localhost:3030/CachorrosTutor",
		method: "post",      
		data: {
			id: '1'

		}
	});
});
test.skip("Agendar banho", async function () {
	await axios({
		url: "http://localhost:3030/CachorrosTutor",
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

test("Deve cadastrar banhista", async function () {
	await axios({
		url: "http://localhost:3030/CadastroBanhista",
		method: "post",
		data: {
			nome: "Deborah"
		}
	});
});

test("Deve alocar banhista", async function () {
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
		url: "http://localhost:3030/HorariosDisponiveisDia",
		method: "get",
		data: {
			week: 2,
			day: 'qua',
			id_pet: 1
		}
	});
});

test("Deve mostrar alocacao", async function() {
	const alocacao = await axios({
		url: "http://localhost:3030/OrganizacaoSemana",
		method: "get",
		data: {
			week: 2
		}
	});
	console.log(alocacao);
});
