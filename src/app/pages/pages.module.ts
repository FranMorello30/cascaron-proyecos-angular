import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

import { FooterModule } from '../layout/components/footer/footer.module';
import { NavbarModule } from '../layout/components/navbar/navbar.module';
import { QuickPanelModule } from '../layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from '../layout/components/toolbar/toolbar.module';


import { PagesComponent } from './pages.component';
import { GestionComponent } from './gestion/gestion.component';




@NgModule({
  declarations: [PagesComponent, GestionComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    FuseSidebarModule,
    
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],exports:[
    PagesComponent
  ]
})
export class PagesModule { }
