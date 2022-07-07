import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserFoodComponent } from './components/user-food/user-food.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeoplesComponent } from './components/peoples/peoples.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopupThankyouComponent } from './components/popup-thankyou/popup-thankyou.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFoodComponent,
    PeoplesComponent,
    PopUpComponent,
    PopupThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,MatFormFieldModule,
    BrowserAnimationsModule,
    MatGridListModule,MatIconModule,
    MatButtonModule,MatMenuModule,FlexLayoutModule,
    MatDialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
