import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IPropositionFilter, IPropositionsResponse } from '../interfaces/IProposition';
import { EndpointsAPI } from './EndpointsAPI';
import { Observable } from 'rxjs';

@Service()
export class ChamberDeputies {

    private readonly http = inject(HttpClient);
    private readonly endpoints = new EndpointsAPI();

    getPropositions(filter: IPropositionFilter): Observable<IPropositionsResponse> {
        let params = new HttpParams();

        Object.entries(filter).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                params = params.set(key, value);
            }
        });

        return this.http.get<IPropositionsResponse>(this.endpoints.getPropositions(), {
            params: params
        });
    }

}
