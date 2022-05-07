import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from '../app/components/nav-bar/nav-bar.component'
import {CompilerComponent} from '../app/components/compiler/compiler.component'
import {LoginComponent} from '../app/components/login/login.component'
import { ContributeComponent } from '../app/components/contribute/contribute.component'
import { HomeComponent } from '../app/components/home/home.component'
import { QuestionPreviewComponent } from '../app/components/home/question-preview/question-preview.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', children:[
    { path:'', component: HomeComponent},
    { path:'question', component: QuestionPreviewComponent},
  ] },
  { path: 'code', component: CompilerComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
