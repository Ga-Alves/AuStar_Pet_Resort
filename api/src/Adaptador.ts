import Conexao from "./conexao";
import pgp from "pg-promise"


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