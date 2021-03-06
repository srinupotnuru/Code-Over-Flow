import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompilerComponent} from '../app/components/compiler/compiler.component'
import {LoginComponent} from '../app/login/login.component'
import { ContributeComponent } from '../app/components/contribute/contribute.component'
import { HomeComponent } from '../app/components/home/home.component'
import { QuestionPreviewComponent } from '../app/components/home/question-preview/question-preview.component';
import { AuthManagementComponent } from './auth-management/auth-management.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { RegisterComponent } from './register/register.component';
import { OtpHandlerComponent } from './otp-handler/otp-handler.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { BlogsComponent } from '../app/components/blogs/blogs.component';
import { CreateBlogComponent } from '../app/components/create-blog/create-blog.component';
import { BlogPreviewComponent } from '../app/components/blogs/blog-preview/blog-preview.component';
import { MyBlogsComponent } from '../app/components/blogs/my-blogs/my-blogs.component';
const routes: Routes = [
  { path: '', component: AuthManagementComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent, children:
    [
      { path:'', component: QuestionsListComponent},
      { path:'question', component: QuestionPreviewComponent},
      { path: 'code', component: CompilerComponent },
      { path: 'contribute', component: ContributeComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'blogs', component: BlogsComponent},
      { path: 'create-blog', component: CreateBlogComponent},
      { path: 'blog-preview', component: BlogPreviewComponent},
      { path: 'my-blogs', component: MyBlogsComponent}
    ] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: OtpHandlerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
