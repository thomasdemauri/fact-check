export class EndpointsAPI {
    // Maybe in the future improve the url to accept parameters
    getPropositions = () => {
        return 'https://dadosabertos.camara.leg.br/api/v2/proposicoes';
    };

    getDetailedProposition = (id: number) => {
        return `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}`;
    }

    getPropositionAuthors = (id: number) => {
        return `https://dadosabertos.camara.leg.br/api/v2/proposicoes/${id}/autores`;
    }

    getDeputyById = (id: number) => {
        return `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`;
    }

    getDeputies = () => {
        return 'https://dadosabertos.camara.leg.br/api/v2/deputados';
    }
}