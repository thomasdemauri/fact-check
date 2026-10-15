import { IBaseFilter } from "./ICore";

export interface IProposition {
    id: number;
    uri: string;
    siglaTipo: string;
    codTipo: number;
    numero: number;
    ano: number;
    ementa: string;
    dataApresentacao: Date;
}

export interface IPropositionStatus {
    dataHora: Date;
    sequencia: number;
    siglaOrgao: string;
    uriOrgao: string;
    uriUltimoRelator: string | null;
    regime: string;
    descricaoTramitacao: string;
    codTipoTramitacao: string;
    descricaoSituacao: string;
    codSituacao: number;
    despacho: string;
    url: string;
    ambito: string;
    apreciacao: string;
}

export interface IDetailedProposition extends IProposition {
    uriOrgaoNumerador: string;
    statusProposicao: IPropositionStatus;
    uriAutores: string;
    descricaoTipo: string;
    ementaDetalhada: string;
    keywords: string;
    uriPropPrincipal: string | null;
    uriPropAnterior: string | null;
    uriPropPosterior: string | null;
    urlInteiroTeor: string;
    urnFinal: string | null;
    texto: string | null;
    justificativa: string | null;
}

export interface IPropositionsResponse<T = IProposition[]> {
    dados: T;
    links: ILink[];
}

export interface ILink {
    rel: LinkTypes;
    href: string;
}

export enum LinkTypes {
    Self = 'self',
    Next = 'next',
    First = 'first',
    Last = 'last',
    Previous = 'previous'
}

export interface IPropositionFilter extends IBaseFilter {
    id?: number[];
    siglaTipo?: string[];
    numero?: number[];
    ano?: number[];
    codTipo?: number[];
    idDeputadoAutor?: number[];
    autor?: string[];
    siglaPartidoAutor?: string[];
    idPartidoAutor?: number[];
    siglaUfAutor?: string[];
    keywords?: string[];
    tramitacaoSenado?: boolean;
    dataInicio?: Date;
    dataFim?: Date;
    dataApresentacaoInicio?: Date;
    dataApresentacaoFim?: Date;
    codSituacao?: number[];
    codTema?: number[];
    pagina?: number;
    itens: number;
    ordem: 'ASC' | 'DESC';
    ordenarPor: 'id'| 'codTipo' | 'siglaTipo' | 'numero' | 'ano';
}