import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ToastrModule } from 'ngx-toastr';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule , FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips'
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CompilerComponent } from './components/compiler/compiler.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ContributeComponent } from './components/contribute/contribute.component';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { QuestionPreviewComponent } from './components/home/question-preview/question-preview.component';
import { AngularSplitModule } from 'angular-split';
import { TestCaseResultsComponent } from './components/home/question-preview/test-case-results/test-case-results.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthManagementComponent } from './auth-management/auth-management.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpHandlerComponent } from './otp-handler/otp-handler.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ServiceInterceptor } from 'src/services/http.interceptor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { BlogPreviewComponent } from './components/blogs/blog-preview/blog-preview.component';
import { MyBlogsComponent } from './components/blogs/my-blogs/my-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompilerComponent,
    ContributeComponent,
    HomeComponent,
    QuestionPreviewComponent,
    TestCaseResultsComponent,
    AuthManagementComponent,
    QuestionsListComponent,
    LoginComponent,
    RegisterComponent,
    OtpHandlerComponent,
    ProfileComponent,
    BlogsComponent,
    CreateBlogComponent,
    BlogPreviewComponent,
    MyBlogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatTableModule,
    AngularSplitModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatProgressBarModule,
    AngularEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
