import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IPropositionsResponse } from '../interfaces/IProposition';
import { EndpointsAPI } from '../services/EndpointsAPI';
import { forkJoin } from 'rxjs';

export const propositionResolver: ResolveFn<IPropositionsResponse> = (route, state) => {
  const http = inject(HttpClient);
  const endpoints = new EndpointsAPI();
  const propositionUrl = endpoints.getPropositions();
  const auth = endpoints.getPropositions();

  return http.get<IPropositionsResponse>(propositionUrl);
  // need to get the deputian also, endpoint already implemented
  // const requests = forkJoin([
  //   http.get<IPropositionsResponse>(propositionUrl),
  //   http.get<IPropositionsResponse>(url)
  // ])

  // return http.get<IPropositionsResponse>(url);
};
