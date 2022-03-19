import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from '../app/components/nav-bar/nav-bar.component'
import {CompilerComponent} from '../app/components/compiler/compiler.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'code', component: CompilerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
