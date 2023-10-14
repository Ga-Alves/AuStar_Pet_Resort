import express, {Request, response, Response}  from "express";
import CadastraPet from "./CadastroPet/CadastroPet";
import RepositorioDadosPets from "./CadastroPet/RepositorioDadosPets";
import Adaptador from "./Adaptador";
const app = express();
app.use(express.json());
const conexao = new Adaptador();
const repositorioPet = new RepositorioDadosPets(conexao);

app.post("/CadastroPet", async function (request: Request, response: Response){
    const cadastraPet = new CadastraPet(repositorioPet);
    await cadastraPet.execute({nomePet: request.body.nomePet, raca: request.body.raca, sexo: request.body.sexo, 
    cor: request.body.cor, porte: request.body.porte, id_tutor: request.body.id}) //id?
    response.end();
});

app.post("/CadastroUser", async function (request: Request, response: Response){
    const cadastraUser = new CadastraUser(repositorioUser);
    await cadastraUser.execute({notifyToken: request.body.notifyToken}) //id?
    response.end();
});

app.listen(3030);