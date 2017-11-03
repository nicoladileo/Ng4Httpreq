import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DerivativeComponent } from './components/derivative/derivative.component';
import { IntegrateComponent } from './components/integrate/integrate.component';

import { NewtonApiService } from './services/newton-api.service';



@NgModule({
  declarations: [
    AppComponent,
    DerivativeComponent,
    IntegrateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule      
  ],
  providers: [NewtonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
