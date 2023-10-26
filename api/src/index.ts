import express, {Request, response, Response}  from "express";
import CadastraPet from "./CadastroPet/CadastroPet";
import CadastraUser from "./CadastroUser/CadastroUser";
import CadastraBanhista from "./CadastroBanhista/CadastraBanhista";
import AlocaBanhista from "./Agenda/AlocaBanhista";
import OfereceServico from "./servicosUpselling/ofereceServico";
import HorariosDisponiveisDia from "./Agenda/HorariosDisponiveisDia";
import ServiceOrders from "./OrdemServico/ServiceOrders";

import RepositorioDadosPets from "./CadastroPet/RepositorioDadosPets";
import RepositorioDadosUsers from "./CadastroUser/RepositorioDadosUser";
import RepositorioDadosBanhistas from "./CadastroBanhista/RepositorioDadosBanhistas"
import RepositorioDadosServicos from "./servicosUpselling/RepositorioDadosServicos";
import RepositorioDadosAgenda from "./Agenda/RepositorioDadosAgenda";
import RepositorioDadosOrdem from "./OrdemServico/RepositorioDadosOrdem";

import Adaptador from "./Adaptador";
import OfereceServico from "./servicosUpselling/ofereceServico";
const app = express();
app.use(express.json());
const conexao = new Adaptador();
const repositorioPet = new RepositorioDadosPets(conexao);
const repositorioUser = new RepositorioDadosUsers(conexao);
const repositorioBanhista = new RepositorioDadosBanhistas(conexao);
const repositorioUpselling = new RepositorioDadosServicos(conexao);
const repositorioAgenda = new RepositorioDadosAgenda(conexao);
const repositorioOrdem = new RepositorioDadosOrdem(conexao);

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

app.post("/CadastroBanhista", async function (request: Request, response: Response){
    const cadastraBanhista = new CadastraBanhista(repositorioBanhista);
    await cadastraBanhista.execute({nome: request.body.nome});
    response.end();
})

app.post("/AlocaBanhista", async function (request: Request, response: Response){
    const alocaBanhista = new AlocaBanhista(repositorioAgenda);
    await alocaBanhista.execute({week: request.body.week, day: request.body.day, employeeID: request.body.employeeID});
    response.end();
})

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

app.get("/HorariosDisponiveisDia", async function (request: Request, response: Response){
    const horariosDisponiveisDia = new HorariosDisponiveisDia(repositorioAgenda, repositorioPet);
    const horarios = await horariosDisponiveisDia.execute({week: request.body.week, day: request.boy.day, id_pet: request.body.id_pet});
    console.log(horarios);
    response.json(horarios);
})

app.get("/ServiceOrders", async function (request: Request, response: Response){
    const serviceOrders = new ServiceOrders(repositorioOrdem);
    const orders = await serviceOrders.execute({week: request.body.week, day: request.body.day});
    console.log(orders);
    response.json(orders);
})

app.listen(3030);