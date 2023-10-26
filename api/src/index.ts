import express, {Request, response, Response}  from "express";
import CadastraPet from "./CadastroPet/CadastroPet";
import CadastraUser from "./CadastroUser/CadastroUser";

import RepositorioDadosPets from "./CadastroPet/RepositorioDadosPets";
import RepositorioDadosUsers from "./CadastroUser/RepositorioDadosUser";
import RepositorioDadosServicos from "./ServicosUpselling/RepositorioDadosServicos";

import Adaptador from "./Adaptador";
import OfereceServico from "./ServicosUpselling/ofereceServico";
const app = express();
app.use(express.json());
const conexao = new Adaptador();
const repositorioPet = new RepositorioDadosPets(conexao);
const repositorioUser = new RepositorioDadosUsers(conexao);
const repositorioUpselling = new RepositorioDadosServicos(conexao);

app.post("/CadastroPet", async function (request: Request, response: Response){
    const cadastraPet = new CadastraPet(repositorioPet);
    await cadastraPet.execute({nomePet: request.body.nomePet, raca: request.body.raca, sexo: request.body.sexo, 
    cor: request.body.cor, porte: request.body.porte, id_tutor: request.body.id}) 
    response.end();
});

app.post("/CadastroUser", async function (request: Request, response: Response){
    const cadastraUser = new CadastraUser(repositorioUser);
    const userId = await cadastraUser.execute({notifyToken: request.body.notifyToken}); 
    response.json(userId);
});

app.get("/ServicoUpselling", async function (request: Request, response: Response){
    const ofereceServico = new OfereceServico(repositorioUpselling);
    const servicos = await ofereceServico.execute({id_dog: request.body.id_dog}); 
    console.log(servicos)
    response.json(servicos);
});

/*
app.post("/AgendarBanho", async function (request: Request, response: Response){
    const agendaBanho = new AgendaBanho(repositorioAgenda);
    await agendaBanho.execute({data: request.body.data, horario: request.body.horario}); 
    response.end();
});*/

app.listen(3030);