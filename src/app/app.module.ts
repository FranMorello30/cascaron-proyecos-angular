import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modulos Plantillas
import { FusePlantillaModule } from './fuse-plantilla.module';

// Componente Principal
import { AppComponent } from 'app/app.component';

// Modulos App
import { PagesModule } from './pages/pages.module';

// Rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,        
        HttpClientModule,
        FusePlantillaModule,
        PagesModule,
        AppRoutingModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
