import { Routes } from '@angular/router';
import { VehiclePage } from './vehicle-page/vehicle-page';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inventory/2010-volskwagen-jetta-s',
        pathMatch: 'full'
    },
    {
        path: 'inventory/:slug',
        component: VehiclePage
    }
];
