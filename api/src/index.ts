import express, {Request, Response}  from "express";
import CadastraPet from "./Pet/CadastroPet";
import RetornaPet from "./Pet/RetornaPets";
import CadastraUser from "./Usuario/CadastroUsuario";
import CadastraBanhista from "./Banhista/CadastraBanhista";
import AlocaBanhista from "./Agenda/AlocaBanhista";
import HorariosDisponiveisDia from "./Agenda/HorariosDisponiveisDia";
import OrdensServico from "./OrdemServico/OrdensServico";
import UserNotify from "./Usuario/NotificaUsuario";
import AgendaBanho from "./OrdemServico/AgendaBanho";
import FinalizaOrdemDeServico from "./OrdemServico/FinalizaOrdemDeServico";
import RetornaBanhistas from "./Banhista/RetornaBanhistas"
import RepositorioDadosPets from "./Pet/RepositorioDadosPets";
import RepositorioDadosUsuarios from "./Usuario/RepositorioDadosUsuario";
import RepositorioDadosBanhistas from "./Banhista/RepositorioDadosBanhistas"
import RepositorioDadosServicos from "./ServicosUpselling/RepositorioDadosServicos";
import RepositorioDadosAgenda from "./Agenda/RepositorioDadosAgenda";
import RepositorioDadosOrdem from "./OrdemServico/RepositorioDadosOrdem";

import Adaptador from "./Adaptador";
import AdaptadorNotificacao from "./AdaptadorNotificacao";
import OfereceServico from "./ServicosUpselling/OfereceServico";
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
const repositorioUser = new RepositorioDadosUsuarios(conexao, conexaoNotifica);
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
    await alocaBanhista.execute({week: request.body.week, day: request.body.day, id_banhista: request.body.id_banhista});
    response.end();
})

app.get("/ServicoUpselling", async function (request: Request, response: Response){
    const id_dog = request.query.id_dog;
    if ( typeof id_dog !== "string" ) {
        response.status(500).json({ error: 'Invalid id_dog' });
        return;
    }
    const ofereceServico = new OfereceServico(repositorioUpselling);
    const servicos = await ofereceServico.execute({id_dog: parseInt(id_dog)}); 
    console.log(servicos)
    response.json(servicos);
});


app.post("/AgendarBanho", async function (request: Request, response: Response){
    const agendaBanho = new AgendaBanho(repositorioAgenda, repositorioPet, repositorioOrdem);
    await agendaBanho.execute({id_pet: request.body.id_pet, data: request.body.data, horario: request.body.horario, finalizacoes: request.body.finalizacoes, servicos: request.body.servicos}); 
    response.end();
});


app.get("/HorariosDisponiveisDia", async function (request: Request, response: Response){
    const week = request.query.week;
    const day = request.query.day;
    const id_pet = request.query.id_pet;
    
    if ( typeof week !== "string") {
        response.status(500).json({ error: 'Invalid week' });
        return;
    }
    if (typeof day !== "string") {
        response.status(500).json({ error: 'Invalid day' });
        return;
    }
    if ( typeof id_pet !== "string") {
        response.status(500).json({ error: 'Invalid id_pet' });
        return;
    }
    const horariosDisponiveisDia = new HorariosDisponiveisDia(repositorioAgenda, repositorioPet);  
    const horarios = await horariosDisponiveisDia.execute({week: parseInt(week), day: day, id_pet: parseInt(id_pet)});
    console.log(horarios);
    response.json(horarios);
})

app.get("/OrdensServico", async function (request: Request, response: Response){
    const week = request.query.week;
    const day = request.query.day;

    if ( typeof week !== "string") {
        response.status(500).json({ error: 'Invalid week' });
        return;
    }
    if ( typeof day !== "string") {
        response.status(500).json({ error: 'Invalid day' });
        return;
    }

    const serviceOrders = new OrdensServico(repositorioOrdem);
    const orders = await serviceOrders.execute({week: parseInt(week), day: day});
    response.json(orders);
})

app.get("/CachorrosTutor", async function (request: Request, response: Response){

    const id_tutor = request.query.id_tutor;

    if ( typeof id_tutor !== "string" ) {
        response.status(500).json({ error: 'Invalid id_tutor' });
        return;
    }
    const petsR = new RetornaPet(repositorioPet);
    const pets = await petsR.execute({id_tutor: parseInt(id_tutor)}) 
    console.log(pets);
    response.json(pets);
})

app.get("/OrganizacaoSemana", async function (request: Request, response: Response){
    const week = request.query.week;

    if ( typeof week !== "string" ) {
        response.status(500).json({ error: 'Invalid week' });
        return;
    }
    const mostrarAlocacao = new MostrarAlocacao(repositorioAgenda);
    const alocacao = await mostrarAlocacao.execute({week: parseInt(week)});
    response.json(alocacao);
})

app.get("/FinalizaOrdemDeServico", async function (request: Request, response: Response){
    const id_ordem = request.query.id_ordem;

    if ( typeof id_ordem !== "string" ) {
        response.status(500).json({ error: 'Invalid id_ordem' });
        return;
    }
    const ordemServico = new FinalizaOrdemDeServico(repositorioOrdem)
    const id_user = await ordemServico.execute({id_ordem: parseInt(id_ordem)});
    const userNotify = new UserNotify(repositorioUser);
    await userNotify.execute({id_user : id_user.id_user});

})

app.get("/RetornaBanhistas", async function (request: Request, response: Response){
    const retornaBanhistas = new RetornaBanhistas(repositorioBanhista)
    const banhistas = await retornaBanhistas.execute();

    console.log(banhistas);
    response.json(banhistas);
})

app.listen(3030, () => console.log("Running"));