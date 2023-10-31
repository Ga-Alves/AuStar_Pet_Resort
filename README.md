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
### Domínio
Nossas classes de domínio foram separadas entre Usuário, Pet, Banhista, Agenda, Ordem de Serviço e Serviços de Upselling. Adotamos essa arquitetura porque essas são as entidades mais importantes para os usuários do sistema, que são o cliente e o administrador da loja. A classe de Serviços de Upselling retorna todos os serviços que podem se aplicar ao pet cujo banho está sendo agendado. A classe Agenda reúne tudo o que é preciso para administrar os funcionários da loja, enquanto as Ordens de Serviço são as responsáveis pelo agendamento e gerenciamento de banhos. No mais, é trivial ver porque Usuário, Pet e Banhista (funcionário) são entidades importantes.

### Portas e adaptadores de Saída
Há duas portas de saída e dois adaptadores, um para o banco de dados e um para o Expo (tecnologia que gera notificações).
Segue o um exemplo da interface da porta para o banco de dados, esse script se encontra no arquivo api/src/conexao:
```typescript
export default interface Conexao{
    query(statement: string, params: any): Promise<any>;
    one(statement: string, params: any): Promise<any>
    close() : Promise<void>
}
```
O adaptador para o banco de dados de todas as classes de domínio foi implementado em um arquivo Adaptador.ts que define as funções para realizar queries para um banco de dados PostgreSQL, usando também a tecnologia PG-Promise.
Segue o exemplo de código desse adaptador:

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

A porta para o Expo está no arquivo AdaptadorNotificacao e o adaptador está no arquivo AdaptadorNotificacao, ambos no diretorio api/src.

### Portas e Adaptadores de Entrada
Cada classe do domínio possue um arquivo com uma porta de entrada em seu diretório. O nome desse arquivo é sempre Repositorio.

O seguinte código é um exemplo de uma porta de entrada, no caso, para a classe Banhista:

```typescript
export default interface RepositorioBanhistas{
    save (banhistaCadastrado: BanhistaCadastrado): Promise<void>
    list (): Promise<any[]>
}
```
Cada domínio possue um arquivo com um adaptador de entrada em seu diretório. O nome desse arquivo é sempre RepositorioDados<Domínio>.
A seguir, um adaptador para a classe banhista, que se encontra no arquivo RepositorioDadosBanhista:

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

