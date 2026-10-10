import { ResolveFn } from '@angular/router';
import { EndpointsAPI } from '../services/EndpointsAPI';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeputyResponse } from '../interfaces/IDeputy';

export const deputyResolver: ResolveFn<IDeputyResponse> = (route, state) => {

  const http = inject(HttpClient);
  const id = route.paramMap.get('id');
  const url = new EndpointsAPI().getDeputyById(Number(id));

  return http.get<IDeputyResponse>(url);
};
