import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AuthGuard } from '../@core/auth/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [
        AuthGuard,
      ],
      data: {
        nivel: 2,
        logado: true,
        redirectTo: '/'
      },
    },
    {
      path: 'clientes',
      loadChildren: () => import('./clientes/clientes.module')
        .then(m => m.ClientesModule),
      canActivate: [
        AuthGuard,
      ],
      data: {
        nivel: 2,
        logado: true,
        redirectTo: '/'
      },
    },
    {
      path: 'produtos',
      loadChildren: () => import('./produtos/produtos.module')
        .then(m => m.ProdutosModule),
      canActivate: [
        AuthGuard,
      ],
      data: {
        nivel: 2,
        logado: true,
        redirectTo: '/'
      },
    },
    {
      path: 'pedidos',
      loadChildren: () => import('./pedidos/pedidos.module')
        .then(m => m.PedidosModule),
      canActivate: [
        AuthGuard,
      ],
      data: {
        nivel: 2,
        logado: true,
        redirectTo: '/'
      },
    },
    {
      path: 'estoque',
      loadChildren: () => import('./estoque/estoque.module')
        .then(m => m.EstoqueModule),
      canActivate: [
        AuthGuard,
      ],
      data: {
        nivel: 2,
        logado: true,
        redirectTo: '/'
      },
    },
    {
      path: '',
      redirectTo: 'pedidos',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
