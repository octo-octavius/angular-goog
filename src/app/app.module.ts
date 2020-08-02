import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormTemplateComponent} from './form-template/form-template.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {PipesComponent} from './pipes/pipes.component';
import {RxjsplayComponent} from './rxjsplay/rxjsplay.component';
import {AppRoutingModule} from './app-routes';
import {AppMaterialModule} from './app.material.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarButtonComponent} from './toolbar/toolbar-button/toolbar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    PipesComponent,
    RxjsplayComponent,
    ToolbarComponent,
    ToolbarButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
