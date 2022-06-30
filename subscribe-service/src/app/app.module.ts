import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
