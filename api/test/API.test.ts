import axios from "axios";

test("Deve cadastrar usuario", async function () {
	await axios({
		url: "http://localhost:3030/CadastroUser",
		method: "post",
		data: {
			notifyToken: "13123-12-31-23-123",
		}
	});

});