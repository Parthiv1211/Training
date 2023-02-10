import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { CompletePageComponent } from './complete-page/complete-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListingPageComponent,
    DetailedListComponent,
    CompletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
