import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { ShowcaseComponent } from './components/sections/showcase/showcase.component';
import { CardComponent } from './components/ui/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    ShowcaseComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
