import { SearchContainerComponent } from './components/search-container/search-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SearchContainerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class SearchRoutingModule { }
