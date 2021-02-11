import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// modulos rutas hijas
import { PagesRoutingModule } from './pages/pages.routing';


//componentes rutas principales
//import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
    {path: '',pathMatch:'full',redirectTo:'/panel'},
    //{path: '**',component:NoPageFoundComponent},
   

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
