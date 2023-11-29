import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { HeroComponent } from './hero/hero.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ValueComponent } from './value/value.component';
import { LearnComponent } from './learn/learn.component';
import { StudentsComponent } from './students/students.component';
import { GrowComponent } from './grow/grow.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    HeroComponent,
    NumbersComponent,
    ValueComponent,
    LearnComponent,
    StudentsComponent,
    GrowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
