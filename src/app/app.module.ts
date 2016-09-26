import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { GenderPipe } from './gender.pipe';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SearchComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
