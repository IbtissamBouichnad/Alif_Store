import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapIconsModule.pick(allIcons)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
