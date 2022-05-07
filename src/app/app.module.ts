import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
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
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { QuestionPreviewComponent } from './components/home/question-preview/question-preview.component';
import { AngularSplitModule } from 'angular-split';
import { TestCaseResultsComponent } from './components/home/question-preview/test-case-results/test-case-results.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompilerComponent,
    LoginComponent,
    ContributeComponent,
    HomeComponent,
    QuestionPreviewComponent,
    TestCaseResultsComponent
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
    MatDialogModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
