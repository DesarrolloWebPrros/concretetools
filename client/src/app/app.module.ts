import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/shared/about/about.component';
import { HomeComponent } from './Components/shared/home/home.component';
import { MainComponent } from './Components/layouts/main/main.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { ProductosComponent } from './Components/moduloProductos/productos/productos.component';
import { PromocionesComponent } from './Components/moduloPromociones/promociones/promociones.component';
import { DistribuidoresComponent } from './Components/shared/distribuidores/distribuidores.component';
import { ContactComponent } from './Components/shared/contact/contact.component';
import { CreateProductoComponent } from './Components/moduloProductos/create-producto/create-producto.component';
import { IndexProductosComponent } from './Components/moduloProductos/index-productos/index-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    ProductosComponent,
    PromocionesComponent,
    DistribuidoresComponent,
    ContactComponent,
    CreateProductoComponent,
    IndexProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
