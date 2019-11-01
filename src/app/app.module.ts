import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {FullpageDirective} from './shared/directives/fullpage.directive';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSliderModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {ContentService} from './shared/services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
