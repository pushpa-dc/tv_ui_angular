import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';
import { LatestComponent } from './latest/latest.component';
import { BhadragolComponent } from './bhadragol/bhadragol.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ItemMediumComponent } from './items/item-medium/item-medium.component';
import { ItemSmallComponent } from './items/item-small/item-small.component';
import { SingleContentComponent } from './single-content/single-content.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    FeatureComponent,
    PopularComponent,
    FooterComponent,
    ScheduleComponent,
    LatestComponent,
    BhadragolComponent,
    ItemMediumComponent,
    ItemSmallComponent,
    SingleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
