import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/shared/about/about.component';
import { DistribuidoresComponent } from './Components/moduloDistribuidores/distribuidores/distribuidores.component';
import { HomeComponent } from './Components/shared/home/home.component';
import { ProductosComponent } from './Components/moduloProductos/productos/productos.component';
import { PromocionesComponent } from './Components/moduloPromociones/promociones/promociones.component';
import { CreateProductoComponent } from './Components/moduloProductos/create-producto/create-producto.component';
import { IndexProductosComponent } from './Components/moduloProductos/index-productos/index-productos.component';
import { ContactComponent } from './Components/shared/contact/contact.component';
import { ProductoComponent } from './Components/moduloProductos/producto/producto.component';
import { IndexDistribuidoresComponent } from './Components/moduloDistribuidores/index-distribuidores/index-distribuidores.component';
import { IndexPromocionesComponent } from './Components/moduloPromociones/index-promociones/index-promociones.component';
import { EditProductoComponent } from './Components/moduloProductos/edit-producto/edit-producto.component';

const routes: Routes = [  
  { path: 'admin-distribuidores-autorizados'    , pathMatch: 'full',  component: IndexDistribuidoresComponent      },
  { path: 'distribuidores-autorizados'    , pathMatch: 'full',  component: DistribuidoresComponent      },
  { path: 'admin-promociones'             , pathMatch: 'full',  component: IndexPromocionesComponent      },
  { path: 'admin-productos'               , pathMatch: 'full',  component: IndexProductosComponent      },
  { path: 'producto/:id'                  , pathMatch: 'full',  component: ProductoComponent            },
  { path: 'promociones'                   , pathMatch: 'full',  component: PromocionesComponent         },
  { path: 'productos'                     , pathMatch: 'full',  component: ProductosComponent           },
  { path: 'contact'                       , pathMatch: 'full',  component: ContactComponent             },
  { path: 'about'                         , pathMatch: 'full',  component: AboutComponent               },
  { path: 'home'                          , pathMatch: 'full',  component: HomeComponent                },
  { path: ''                              , redirectTo: 'home',pathMatch:'full'                         },
  // Rutas para operaciones
  { path: 'create-producto'               , pathMatch: 'full',  component: CreateProductoComponent      },
  { path: 'edit-producto/:id'             , pathMatch: 'full',  component: EditProductoComponent        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {   
  constructor(){}
  ngOnInit(): void {}; 
}
