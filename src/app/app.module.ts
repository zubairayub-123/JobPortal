import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { JobComponent } from './components/job/job.component';
import { JobItemComponent } from './components/job-item/job-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobComponent,
    JobItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
