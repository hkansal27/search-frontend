import { BaseHomeComponent } from './components/base-home/base-home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: BaseHomeComponent,
    children: [
      {
        path: 'search',
        loadChildren: './modules/search/search.module#SearchModule',
      }
    ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
