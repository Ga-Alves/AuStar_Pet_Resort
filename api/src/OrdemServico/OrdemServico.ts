export default class OrdemServico {
    constructor (readonly id_pet: number, readonly id_banhista: number, readonly finalizacoes: number[],
                readonly servicos: number[], readonly total: number, readonly data: Date,
                readonly horario: string, readonly completo: boolean) {
    }
}
