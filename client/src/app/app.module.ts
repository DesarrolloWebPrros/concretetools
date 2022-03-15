import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
