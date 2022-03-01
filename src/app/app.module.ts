import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleCompComponent } from './title-comp/title-comp.component';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { PictureCompComponent } from './picture-comp/picture-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleCompComponent,
    BodyCompComponent,
    PictureCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
