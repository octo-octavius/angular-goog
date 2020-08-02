import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {StoryComponent} from './story/story.component';
import {FormTemplateComponent} from './form-template/form-template.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {PipesComponent} from './pipes/pipes.component';
import {RxjsplayComponent} from './rxjsplay/rxjsplay.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: 'app-form-template', component: FormTemplateComponent},
      {path: 'app-form-reactive', component: FormReactiveComponent},
      {path: 'app-pipes', component: PipesComponent},
      {path: 'app-rx-js', component: RxjsplayComponent},
      {path: 'app-toolbar', component: ToolbarComponent},
      {path: '**', component: StoryComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
