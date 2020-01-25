import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormTemplateComponent} from './form-template/form-template.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsplayComponent } from './rxjsplay/rxjsplay.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    PipesComponent,
    RxjsplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
