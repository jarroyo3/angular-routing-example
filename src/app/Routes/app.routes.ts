import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GeneralLayoutComponent } from '../Components/_layouts/general-layout/general-layout.component';
import { CmpTiendaComponent } from '../Components/cmp-tienda/cmp-tienda.component';
import { CmpMayoristaComponent } from '../Components/cmp-mayorista/cmp-mayorista.component';
import { CmpHomeComponent } from '../Components/cmp-home/cmp-home.component';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: CmpHomeComponent },
    {
        path: 'usuario',
        component: GeneralLayoutComponent,
        children: [
            { path: 'tienda', component: CmpTiendaComponent },
            { path: 'mayorista', component: CmpMayoristaComponent },
        ]
    },
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
