import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Material Section
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

//Routing
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [AppComponent, ItemListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
