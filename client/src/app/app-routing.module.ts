import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/shared/about/about.component';
import { DistribuidoresComponent } from './Components/shared/distribuidores/distribuidores.component';
import { HomeComponent } from './Components/shared/home/home.component';
import { ProductosComponent } from './Components/moduloProductos/productos/productos.component';
import { PromocionesComponent } from './Components/moduloPromociones/promociones/promociones.component';
import { CreateProductoComponent } from './Components/moduloProductos/create-producto/create-producto.component';
import { IndexProductosComponent } from './Components/moduloProductos/index-productos/index-productos.component';

const routes: Routes = [  
  { path: 'distribuidores-autorizados'    , pathMatch: 'full',  component: DistribuidoresComponent      },
  { path: 'promociones'                   , pathMatch: 'full',  component: PromocionesComponent         },
  { path: 'admin-productos'               , pathMatch: 'full',  component: IndexProductosComponent           },
  { path: 'productos'                     , pathMatch: 'full',  component: ProductosComponent           },
  { path: 'about'                         , pathMatch: 'full',  component: AboutComponent               },
  { path: 'home'                          , pathMatch: 'full',  component: HomeComponent                },
  { path: ''                              , redirectTo: 'home',pathMatch:'full'                         },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {   
  constructor(){}
  ngOnInit(): void {}; 
}
