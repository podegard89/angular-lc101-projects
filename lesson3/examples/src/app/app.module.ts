import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { SkillSetTableComponent } from './skill-set-table/skill-set-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SkillSetComponent,
    SkillSetTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
