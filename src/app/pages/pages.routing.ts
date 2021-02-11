import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { PagesComponent } from './pages.component';

import { GestionComponent } from './gestion/gestion.component';



const routes: Routes = [
    {
        path:'panel',
        component:PagesComponent,
        children:[
            {
                path: 'gestion',
                component:GestionComponent            
            },                       
        ]  
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
