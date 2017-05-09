import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [ ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
