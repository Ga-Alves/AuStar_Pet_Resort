import express, {Request, Response}  from "express";
import CadastraPet from "./CadastroPet/CadastroPet";
import RetornaPet from "./CadastroPet/RetornaPets";
import CadastraUser from "./CadastroUser/CadastroUser";
import CadastraBanhista from "./CadastroBanhista/CadastraBanhista";
import AlocaBanhista from "./Agenda/AlocaBanhista";
import HorariosDisponiveisDia from "./Agenda/HorariosDisponiveisDia";
import ServiceOrders from "./OrdemServico/ServiceOrders";
import UserNotify from "./CadastroUser/notifyToken";
import AgendaBanho from "./Agenda/AgendaBanho";

import RepositorioDadosPets from "./CadastroPet/RepositorioDadosPets";
import RepositorioDadosUsers from "./CadastroUser/RepositorioDadosUser";
import RepositorioDadosBanhistas from "./CadastroBanhista/RepositorioDadosBanhistas"
import RepositorioDadosServicos from "./servicosUpselling/RepositorioDadosServicos";
import RepositorioDadosAgenda from "./Agenda/RepositorioDadosAgenda";
import RepositorioDadosOrdem from "./OrdemServico/RepositorioDadosOrdem";

import Adaptador from "./Adaptador";
import AdaptadorNotificacao from "./AdaptadorNotificacao";
import OfereceServico from "./servicosUpselling/ofereceServico";
import MostrarAlocacao from "./Agenda/MostrarAlocacao";
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    allowedHeaders: '*'
    // credentials: true,            //access-control-allow-credentials:true
    // optionSuccessStatus: 200
}));

app.use(express.json());
const conexao = new Adaptador();
const conexaoNotifica = new AdaptadorNotificacao();

const repositorioPet = new RepositorioDadosPets(conexao);
const repositorioUser = new RepositorioDadosUsers(conexao, conexaoNotifica);
const repositorioBanhista = new RepositorioDadosBanhistas(conexao);
const repositorioUpselling = new RepositorioDadosServicos(conexao);
const repositorioAgenda = new RepositorioDadosAgenda(conexao);
const repositorioOrdem = new RepositorioDadosOrdem(conexao);

app.post("/CadastroPet", async function (request, response, next){
    const cadastraPet = new CadastraPet(repositorioPet);
    await cadastraPet.execute({nomePet: request.body.nomePet, raca: request.body.raca, sexo: request.body.sexo, 
    cor: request.body.cor, porte: request.body.porte, id_tutor: request.body.id}) 
    response.end();
});

app.post("/CadastroUser", async function (request, response, next) {
    const cadastraUser = new CadastraUser(repositorioUser);
    console.log(request.body)
    const userId =  await cadastraUser.execute({notifyToken: request.body.notifyToken}); 
    console.log(userId)
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


app.post("/AgendarBanho", async function (request: Request, response: Response){
    const agendaBanho = new AgendaBanho(repositorioAgenda, repositorioPet, repositorioOrdem);
    await agendaBanho.execute({id_pet: request.body.id_pet, data: request.body.data, horario: request.body.horario, finalizacoes: request.body.finalizacoes, servicos: request.body.servicos}); 
    response.end();
});

app.get("/HorariosDisponiveisDia", async function (request: Request, response: Response){
    const horariosDisponiveisDia = new HorariosDisponiveisDia(repositorioAgenda, repositorioPet);
    const horarios = await horariosDisponiveisDia.execute({week: request.body.week, day: request.body.day, id_pet: request.body.id_pet});
    console.log(horarios);
    response.json(horarios);
})

app.get("/ServiceOrders", async function (request: Request, response: Response){
    const serviceOrders = new ServiceOrders(repositorioOrdem);
    const userNotify = new UserNotify(repositorioUser);
    const orders = await serviceOrders.execute({week: request.body.week, day: request.body.day});
    // eu acho q isso é aqui
    await userNotify.execute({id_user : request.body.id_user});
    console.log(orders);
    response.json(orders);
})

app.get("/CachorrosTutor", async function (request: Request, response: Response){
    const petsR = new RetornaPet(repositorioPet);
    const pets = petsR.execute({id_tutor: request.body.id}) 
    response.json(pets);
})

app.get("/OrganizacaoSemana", async function (request: Request, response: Response){
    const mostrarAlocacao = new MostrarAlocacao(repositorioAgenda);
    const alocacao = await mostrarAlocacao.execute({week: request.body.week});
    console.log(alocacao);
    response.json(alocacao);
})

app.listen(3030, () => console.log("Running"));