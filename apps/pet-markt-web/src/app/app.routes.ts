import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const mod = await import('./home/home.component');
            return mod.HomeComponent;
        },
    },
    {
        path: 'products',
        loadComponent: async () => {
            const mod = await import('./products/products.component');
            return mod.ProductsComponent;
        },
    },
];
