import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { RegisterComponent } from './register/register.component';
import { SumComponent } from './sum/sum.component';
import { LikeComponent } from './like/like.component';




@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    DateCountPipe,
    RegisterComponent,
    SumComponent,
    LikeComponent
  ],
  
  imports: [
    platformBrowser.BrowserModule,
    FormsModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
