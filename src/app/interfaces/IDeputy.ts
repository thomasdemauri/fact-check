import { ILink } from './IProposition';

export interface IDeputyOffice {
    nome: string | null;
    predio: string | null;
    sala: string | null;
    andar: string | null;
    telefone: string | null;
    email: string | null;
}

export interface IDeputyStatus {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string | null;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string | null;
    data: Date;
    nomeEleitoral: string;
    gabinete: IDeputyOffice;
    situacao: string;
    condicaoEleitoral: string;
    descricaoStatus: string | null;
}

export interface IDeputy {
    id: number;
    uri: string;
    nomeCivil: string;
    ultimoStatus: IDeputyStatus;
    cpf: string;
    sexo: string;
    urlWebsite: string | null;
    redeSocial: string[];
    dataNascimento: Date;
    dataFalecimento: Date | null;
    ufNascimento: string;
    municipioNascimento: string;
    escolaridade: string;
}

export interface IDeputyResponse {
    dados: IDeputy;
    links: ILink[];
}
