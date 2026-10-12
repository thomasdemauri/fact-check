import { Routes } from '@angular/router';
import { Propositions } from './pages/propositions/propositions';
import { PropositionDetailed } from './pages/proposition-detailed/proposition-detailed';
import { propositionDetailedResolver } from './resolvers/proposition-detailed-resolver';
import { DeputyDetailed } from './pages/deputy-detailed/deputy-detailed';
import { deputyResolver } from './resolvers/deputy-resolver';

export const routes: Routes = [
    {
        path: 'propositions',
        component: Propositions,
    },
    {
        path: 'propositions/:id',
        component: PropositionDetailed,
        resolve: {
            proposition: propositionDetailedResolver
        }
    },
    {
        path: 'deputies/:id',
        component: DeputyDetailed,
        resolve: {
            deputy: deputyResolver
        }
    }
];
