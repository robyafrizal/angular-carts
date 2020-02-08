import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemListRoutingModule } from "./item-list-routing.module";
import { ItemListComponent } from "./item-list.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, ItemListRoutingModule, MaterialModule]
})
export class ItemListModule {}
