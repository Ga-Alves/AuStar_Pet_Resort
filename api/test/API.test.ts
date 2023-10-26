import axios from "axios";

test.skip("Deve cadastrar usuario", async function () {
	await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: '131235690ddifrfff5',
		}
	});
});
	
test.skip("Deve cadastrar Pet", async function () {
	await axios({
		url: "http://localhost:3030/CadastroPet",
		method: "post",
		data: {
			nomePet: "Billy",   
			raca: "Maltês",
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
			id_dog: '1'

		}
	});
});
test("Deve retornar cachoros", async function () {
	await axios({
		url: "http://localhost:3030/CachorrosTutor",
		method: "get",  
		data: {
			id: 0

		}
	});
});