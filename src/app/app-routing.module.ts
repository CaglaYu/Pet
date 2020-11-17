

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EklepetComponent} from './eklepet/eklepet.component';
import { DuzeltpetComponent} from './duzeltpet/duzeltpet.component';
import { LostpetComponent} from './lostpet/lostpet.component';
import { FoundpetComponent} from './foundpet/foundpet.component';
import { RegisterComponent } from './account/register.component';

import { AuthGuard } from './_helpers';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent }, 
  { path: 'eklepet', component: EklepetComponent, canActivate: [AuthGuard] },
  { path: 'duzeltpet/:id', component: DuzeltpetComponent, canActivate: [AuthGuard] },
  { path: 'lostpet', component: LostpetComponent   },
  { path: 'foundpet', component: FoundpetComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', loadChildren: accountModule }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }