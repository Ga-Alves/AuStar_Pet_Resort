import axios from "axios";

test("Deve cadastrar usuario", async function () {
	await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: "13123-12-31-23-123",
		}
	});
	await axios({
		url: "http://localhost:3030/CadastroPet",
		method: "post",
		data: {
			nome: "Billy",
			raca: "Maltês",
			sexo: "Macho",
			cor: "Branco",
			porte: "P",
			id: '1231-1231-231-23-12'

		}
	});

});