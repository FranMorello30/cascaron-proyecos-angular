import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

// Fuse
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';


@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      TranslateModule.forRoot(),
      BrowserAnimationsModule,
      MatMomentDateModule,
      MatButtonModule,
      MatIconModule,

      FuseModule.forRoot(fuseConfig),
      FuseProgressBarModule,
      FuseSharedModule,
      FuseSidebarModule,
      FuseThemeOptionsModule,
  ],
  exports:[
      TranslateModule,
      BrowserAnimationsModule,
      MatMomentDateModule,
      MatButtonModule,
      MatIconModule,

      FuseModule,
      FuseProgressBarModule,
      FuseSharedModule,
      FuseSidebarModule,
      FuseThemeOptionsModule,
  ]
})
export class FusePlantillaModule { }
