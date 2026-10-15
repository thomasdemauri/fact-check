import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IPropositionFilter, IPropositionsResponse } from '../interfaces/IProposition';
import { EndpointsAPI } from './EndpointsAPI';
import { Observable } from 'rxjs';
import { IDeputiesFilter, IDeputyList, IDeputyResponse } from '../interfaces/IDeputy';
import { IBaseFilter } from '../interfaces/ICore';

@Service()
export class ChamberDeputies {

    private readonly http = inject(HttpClient);
    private readonly endpoints = new EndpointsAPI();

    getPropositions(filter: IPropositionFilter): Observable<IPropositionsResponse> {
        const params = this.buildParams(filter);
        return this.http.get<IPropositionsResponse>(this.endpoints.getPropositions(), {
            params: params
        });
    }

    getDeputies(filter: IDeputiesFilter): Observable<IDeputyResponse<IDeputyList[]>> {
        const params = this.buildParams(filter);
        return this.http.get<IDeputyResponse<IDeputyList[]>>(this.endpoints.getDeputies(), {
            params: params
        });
    }

    buildParams<T extends IBaseFilter>(filter: T): HttpParams {
        let params = new HttpParams();
        Object.entries(filter).forEach(([key, value]) => {

            if (value === undefined || value === null || value === '') {
                return;
            }

           if (Array.isArray(value)) {
                const values = value.filter(v => v !== undefined
                    && v !== null
                    && (typeof v !== 'string' || v.trim() !== '')
                );

                if (values.length === 0) {
                    return;
                }

                value = values.join(',');
           }

            params = params.set(key, value);
        });

        return params;
    }

}
