import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/shared/about/about.component';
import { HomeComponent } from './Components/shared/home/home.component';

const routes: Routes = [  
  { path: 'home',        pathMatch: 'full',  component: HomeComponent                    },
  { path: ''                           , redirectTo: 'home',pathMatch:'full'                     },
  { path: 'about'   , pathMatch: 'full',  component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {   
  constructor(){}
  ngOnInit(): void {}; 
}
