import { ActivatedRoute, ResolveFn } from '@angular/router';
import { EndpointsAPI } from '../services/EndpointsAPI';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetailedProposition } from '../interfaces/IProposition';

export const propositionDetailedResolver: ResolveFn<IDetailedProposition> = (route, state) => {
  
  const http = inject(HttpClient);
  const id = route.paramMap.get('id');
  const url = new EndpointsAPI().getDetailedProposition(Number(id));

  return http.get<IDetailedProposition>(url);
};
