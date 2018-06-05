import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneralLayoutComponent } from './Components/_layouts/general-layout/general-layout.component';
import { CmpTiendaComponent } from './Components/cmp-tienda/cmp-tienda.component';
import { CmpMayoristaComponent } from './Components/cmp-mayorista/cmp-mayorista.component';
import { CmpHomeComponent } from './Components/cmp-home/cmp-home.component';
import { ROUTING } from './Routes/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    GeneralLayoutComponent,
    CmpTiendaComponent,
    CmpMayoristaComponent,
    CmpHomeComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
