import { Routes } from '@angular/router';
import { Propositions } from './pages/propositions/propositions';
import { propositionResolver } from './resolvers/proposition-resolver';
import { PropositionDetailed } from './pages/proposition-detailed/proposition-detailed';
import { propositionDetailedResolver } from './resolvers/proposition-detailed-resolver';

export const routes: Routes = [
    {
        path: '',
        component: Propositions,
        resolve: {
            propositions: propositionResolver
        },
    },
    {
        path: 'propositions/:id',
        component: PropositionDetailed,
        resolve: {
            proposition: propositionDetailedResolver
        }
    }
];
