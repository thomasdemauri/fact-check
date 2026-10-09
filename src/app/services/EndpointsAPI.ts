export class EndpointsAPI {
    // Maybe in the future improve the url to accept parameters
    getPropositions = () => {
        return 'https://dadosabertos.camara.leg.br/api/v2/proposicoes?codTipo=&itens=15&ordem=DESC&ordenarPor=ano';
    };

    getDetailedProposition = (id: number) => {
        return `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`;
    }

    getPropositionAuthors = (id: number) => {
        return `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/autores`;
    }
}