import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OpenapiEditorLibModule} from '../../projects/openapi-editor-lib/src/lib/openapi-editor-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      OpenapiEditorLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
