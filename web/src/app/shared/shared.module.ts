import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import _ from 'lodash';

// Custom
import * as modules from './modules';
// components, pipes, services

/// Angular
const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  RouterModule
];

const declarations = [
  // ..._.toArray(components)
];

@NgModule({
  imports: [...angularModules],
  declarations: [...declarations],
  exports: [
    ...angularModules,
    ...declarations,
    _.toArray(modules)
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
