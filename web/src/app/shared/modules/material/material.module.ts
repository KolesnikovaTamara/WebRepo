import { NgModule } from '@angular/core';
import { MdButtonModule, MdListModule, MdToolbarModule } from '@angular/material';

const MATERIAL_MODULES = [MdButtonModule, MdListModule, MdToolbarModule];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  declarations: []
})
export class MaterialModule {
}
