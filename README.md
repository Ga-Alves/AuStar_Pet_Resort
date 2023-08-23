# AuStar_Pet_Resort
MVP do aplicativo mobile para agendamento de horários para banho de cães da empresa AuStar Pet Resort. Este aplicativo foi desenvolvido durante a disciplina de Práticas em Desenvolvimento de Software da UFMG.

## Escopo do Sistema
MVP do aplicativo mobile para agendamento de horários para banho de cães da empresa AuStar Pet Resort.

## Principais Features

- Agendar horário de banho do cachorro na empresa.
- Up-Selling de serviços ( Recomendação de Serviços )
- Gerenciamento de agenda dos banhistas ( funcionários ).

## Tecnologias
- Linguagem de Programação: JavaScript
- React Native
- Expo
- axios
- NPM
- express
- SQLite
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


