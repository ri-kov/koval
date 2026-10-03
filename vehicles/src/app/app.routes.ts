import { Routes } from '@angular/router';
import { VehiclePage } from './vehicle-page/vehicle-page';
export const routes: Routes = [
    {
        path: 'inventory/:slug',
        component: VehiclePage
    }
];
