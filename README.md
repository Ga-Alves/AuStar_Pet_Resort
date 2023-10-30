# AuStar_Pet_Resort
Versão 1 do aplicativo mobile para agendamento de horários para banho de cães da empresa <a href="https://www.instagram.com/austarpet/" target="_blank">AuStar Pet Resort</a>. Este aplicativo foi desenvolvido durante a disciplina de Práticas em Desenvolvimento de Software da UFMG.

## Escopo do Sistema
Versão 1 do aplicativo mobile para agendamento de horários para banho de cães da empresa AuStar Pet Resort.

## Principais Features

- Agendar horário de banho do cachorro na empresa.
- Up-Selling de serviços ( Recomendação de Serviços )
- Gerenciamento de agenda dos banhistas ( funcionários ).

## Tecnologias
- Linguagem de Programação: JavaScript (Front), TypeScript (Back)
- React Native
- Expo
- Axios
- NPM
- Express
- PostgreSQL
- PGP
- Postman
- <a href="https://www.figma.com/file/bfAug0nLIeBicvswALIcbl/AuStart-Pet?type=design&node-id=0%3A1&mode=design&t=1KRBqUzKLzfJFAde-1" target="_blank">Figma</a>
</div><br/>

## Membros da Equipe

1. Gabriel Alves Reis  
2. Samuel Brísio de Jesus
3. Raphaela Silva
4. Deborah Santos Andrade Guimarães

## Backlog do produto

 ✍️ Eu, como *cliente*, quero *cadastrar meu pet* no sistema.
</br>
 ✍️ Eu, como *cliente*, quero *agendar um horário para o banho* do meu pet.
</br>
 ✍️ Eu, como *cliente*, quero *agendar um horário de banho igual para todos os meus pets* do meu pet.
</br>
 ✍️ Eu, como *cliente*, quero *adicionar uma finalização para o banho* do meu pet.
</br>
 ✍️ Eu, como *cliente*, quero *ver o histórico de banho* do meu pet.
</br>
 ✍️ Eu, como *cliente*, quero *acompanhar o timeline de serviços* do meu pet.
</br>
 ✍️ Eu, como *administrador*, quero *visualizar os banhos* do dia.
</br>
 ✍️ Eu, como *administrador*, quero *notificar o cliente sobre o término do banho* do pet.
</br>
 ✍️ Eu, como *administrador*, quero *sugerir serviços extras (Up-Selling)* para meu cliente.
</br>
 ✍️ Eu, como *administrador*, quero *gerenciar os horários dos banhistas*.
</br>
 ✍️ Eu, como *administrador*, quero *lembrar o tutor sobre o banho*, para evitar atrasos.
</br>
 ✍️ Eu, como *administrador*, quero *realizar um check-in do pet* quando chegar no local para aceitar ou rejeitar o pet para banho.
</br>
 ✍️ Eu, como *administrador*, quero *enviar atualizações do pet para seu tutor*.
</br>
 ✍️ Eu, como *administrador*, quero *obter informações acerca da frequência e serviços de um determinado cliente*.
</br>
 ✍️ Eu, como *administrador*, quero *editar a ordem de serviço manualmente*.
</br>
----


## Backlog da Sprint

<details>
    <summary>
        ✍️ 00 - Tarefa 0, Ambientes e Configurações
    </summary>

### Front

- Iniciar projeto React Native com Expo - ( Samuel )
- Organizar pastas do projeto - ( Gabriel Alves )
- Tela / componentes da tela "Dashboard Cliente" - ( Gabriel & Samuel )
### Back

- Iniciar projeto e dependências, i.e. *npm* install express - ( Rapha )
- Instalar e configurar SQLite. - ( Deborah )
- Organizar pastas do projeto - ( Rapha & Deborah )
</details>
</br>
<details>
    <summary>
        ✍️ 01 - Eu, como *cliente*, quero *cadastrar meu pet* no sistema.
    </summary>

### Front

- Component "Select dropdown" - ( Gabriel )
- Component "Radio Button + text" - ( Samuel )
- Component "Botão Laranja" - ( Samuel )
- Component "Text Input" - ( Gabriel )
- Component "Title" - ( Samuel )
- Component "Footer" - ( Gabriel )
- Tela Cadastro - ( Gabriel & Samuel )
### Back
- Criar tabela pet - ( Deborah )
- Implementar Rota de cadastro - ( Raphaela )
</details>  
</br>
<details>
    <summary>
        ✍️ 02 - Eu, como *cliente*, quero *agendar um horário para o banho* do meu pet.
    </summary>

### Front
- Component "Subtitle"
- Component "Border"
- Component "Botão de horário enable/disable"
- Configurar useContext - ( Gabriel & Samuel )
- Tela Agendar Banho 1 - ( Gabriel )
- Tela Agendar Banho 3 - ( Gabriel & Samuel )
- Tela Agendar Banho 4 - ( Samuel)
- Tela Agendar Banho 5 - ( Gabriel )
- Tela Agendar Banho 6 - ( Samuel )


### Back
- Implementar uma agenda no banco de dados (Deborah)
- Rota get para ler um espaço disponível da agenda (Deborah & Rapha)
- Implementar tabelas de preços para os serviços (Deborah)
- Rota para retornar valores (Rapha)
- Implementar uma classe de ordem de serviço no banco de dados (Deborah)
	Atributos:
Referência ao cadastro do pet
Nome do banhista
Dia
Horário
Finalizações
Referências para serviços extras (mostrar preços)
Preço total
Status (concluído ou não) 
</details>  
</br>

<details>
    <summary>
        ✍️ 03 - Eu, como *cliente*, quero *adicionar uma finalização para o banho* do meu pet.
    </summary>

### Front
- Tela Agendar Banho 2 - ( Samuel)

</details>  
</br>

<details>
    <summary>
        ✍️ 04 - Eu, como *administrador*, quero *visualizar os banhos* do dia.
</summary>

### Front
- Component “Service Ordem” - ( Gabriel )
- Component “Semana/Dia Enable/Disable” ( Samuel )
- Tela “Service Ordem” ( Samuel )
 
### Back
- Implementar lógica para buscar as ordens de serviço do dia (Rapha)
- Rota para retornar as ordens de serviço de um dia específico (Rapha)
</details>  
</br>

<details>
    <summary>
        ✍️ 05 - Eu, como *administrador*, quero *notificar o cliente sobre o término do banho* do pet.
</summary>

### Front
- Pop-Up de Conclusão do Serviço

### Back
- Mandar notificações para os respectivos tutores usando a rota que retorna as ordens de serviço (Rapha)
- Rota de finalização de uma ordem de serviço (Deborah)
</details>  
</br>


<details>
    <summary>
        ✍️ 06 - Eu, como *administrador*, quero *sugerir serviços extras (Up-Selling)* para meu cliente.
</summary>

### Front
- Conectar com a rota do backend - ( Samuel )


### Back
- Implementar uma tabela de dicas (Deborah)
- Escrever lógica condicional baseada na raça e na cor do pelo do cachorro para a sugestão de serviços (Rapha)
- Rota para retornar uma dica (Rapha)
</details>  
</br>


<details>
    <summary>
        ✍️ 07 - Eu, como *administrador*, quero *gerenciar os horários dos banhistas*.
</summary>

### Front
- Component “Nome do Banhista dentro Agenda” - ( Gabriel )
- Tela Gerencia Agenda - (Gabriel)
- Tela Cadastro do Funcionário - ( Samuel )

### Back
- Implementar tabela dos banhistas cadastrados. (Deborah)
- Implementar lógica de disponibilidade baseada na duração de cada banho. (Deborah)
- Rota para inserir na agenda os banhistas disponíveis em cada dia. (Deborah)
</details>  
</br>


<details>
    <summary>    
 	✍️ 08 - Eu, como *administrador*, quero *lembrar o tutor sobre o banho*, para evitar atrasos.
</br>

</summary>


### Back
- Mandar notificações para os respectivos tutores usando a rota que retorna as ordens de serviço (Rapha)

</details>  
</br>

## Arquitetura Hexagonal

Nossas classes de domínio foram separadas entre Usuário, Pet, Banhista, Agenda, Ordem de Serviço e Serviços de Upselling. Adotamos essa arquitetura porque essas são as entidades mais importantes para os usuários do sistema, que são o cliente e o administrador da loja. A classe de Serviços de Upselling retorna todos os serviços que podem se aplicar ao pet cujo banho está sendo agendado. A classe Agenda reúne tudo o que é preciso para administrar os funcionários da loja, enquanto as Ordens de Serviço são as responsáveis pelo agendamento e gerenciamento de banhos. No mais, é trivial ver porque Usuário, Pet e Banhista (funcionário) são entidades importantes.

O adaptador para o banco de dados de todas as classes de domínio foi implementado em um arquivo Adaptador.ts que define as funções para realizar queries para um banco de dados PostgreSQL, usando também a tecnologia PG-Promise.

```typescript
export default class Adaptador implements Conexao{
    conexao: any;
    constructor(){
	this.conexao = pgp() ("postgres://postgres:rapha@localhost:5432/app") 
    }
    query(statement: string, params: any): Promise<any> {  
	return this.conexao.query(statement, params);
    }
    one(statement: string, params: any): Promise<any> {
	return this.conexao.one(statement, params);
    }
    close(): Promise<void>{
	return this.conexao.$pool.end();
    }
}
```
Note que as funções implementadas definem como o repositório irá interagir com o banco de dados. Por exemplo, a função "query" receberá o texto e os parâmetros para realizar uma query no banco de dados com a sintaxe correta de PostgreSQL.



As portas de saída para as classes Banhista, Pet e Usuário são seus respectivos cadastros. Na estrutura de diretórios do back end do sistema, cada um desses domínios tem a sua própria pasta. Isso significa que cada entidade tem sua própria implementação de repositório. Os repositórios de cada classe contêm as queries que fazem inserções e atualizações nos bancos de dados. Um exemplo de repositório é o de um banhista cadastrado:


O seguinte código é um exmplo de uma porta de entrada, no caso, para a classe Banhista:

```typescript
export default interface RepositorioBanhistas{
    save (banhistaCadastrado: BanhistaCadastrado): Promise<void>
    list (): Promise<any[]>
}
```

A seguir, um adaptador para a classe banhista:

```typescript
export default class RepositorioDadosBanhistas implements RepositorioBanhistas {
    constructor (readonly conexao: Conexao) {
    }

    async save(banhistaCadastrado: BanhistaCadastrado): Promise<void> {
	await this.conexao.query("insert into app.Banhista (nome) values ($1)", [banhistaCadastrado.nome]);
    }
    async list(): Promise<any[]> {
	const banhistasCadastrados = await this.conexao.query("select * from app.Banhista", 0);
	return banhistasCadastrados
    }
}
```

As funções acima fazem queries para salvar um novo funcionário no banco de dados e para listar os que já existem no banco.

A classe Agenda, por sua vez, é usada para alocar funcionários da seguinte maneira: cada entrada da agenda corresponde a um dia de trabalho de um funcionário. Um exemplo no banco de dados:

	app=# select * from app.agenda;
	 id_entrada | id_banhista | nome |    dia     |      horarios       
	------------+-------------+------+------------+---------------------
	         22 |           1 | Samu | 2023-11-10 | {0,1,2,3,4,6,7,8,9}
	         20 |           1 | Samu | 2023-11-08 | {0,2,3,4,6,7,8,9}
	         21 |           1 | Samu | 2023-11-09 | {2,3,4,6,7,8,9}
	(3 registros)

Essa tabela mostra que o funcionário Samu foi alocado nos dias 8, 9 e 10 de novembro. A coluna "horarios" indica quais horários ele ainda tem disponíveis para fazer o banho e a tosa de um pet. A porta de entrada é uma requisição por parte do administrador do negócio, que escolhe um dia em que um funcionário que está cadastrado irá trabalhar. A primeira porta de saída é o próprio armazenamento da entrada da agenda. Dentro do sistema, além de mostrar quantos e quais funcionários vão trabalhar em um dia, essa tabela é utilizada para dois outros fins: para mostrar horários disponíveis para banho e para agendar um banho. Para mostrar horários disponíveis, a tabela é consultada para ver se há um funcionário disponível, e para agendar um banho a tabela é modificada para retirar um dos horários disponíveis de um banhista. Logo, temos três operações de saída: um armazenamento, uma consulta e uma atualização.

Por fim, uma instância da classe Ordem de Serviço é gerada quando um cliente agenda um banho. Para gerar uma, é necessário consultar várias outras tabelas seguindo as informações que o cliente fornece no front end. Segue abaixo um exemplo de uma ordem de serviço:

	app=# select * from app.ordemservico;
	 id_ordem | id_pet | id_banhista | finalizacao | servicos | total  |    data    | horario | completo 
	----------+--------+-------------+-------------+----------+--------+------------+---------+----------
        	1 |      1 |           1 | {1,2}       | {1,2}    | 100.00 | 2023-11-08 | 8:00    | f

Na tela de agendar o banho, só é possível marcar os horários que estão disponíveis e, para isso, é necessário consultar a tabela Agenda. A rota de Serviços de Upselling retorna os serviços adequados para o pet. A identificação do funcionário (id_banhista) é encontrado automaticamente por uma função que retorna um funcionário que está disponível na data e no horário escolhidos. O preço total é calculado ao consultar as tabelas de finalizações e de serviços de upselling, que têm valores fixos no sistema. Por fim, quando o banho do pet é concluído, a função de finalizar a ordem de serviço muda o campo "completo" para "true".
