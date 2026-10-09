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
    rel: string;
    href: string;
}
