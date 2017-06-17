import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormSearchComponent } from './components/form-search/form-search.component';

const components = [
  HeaderComponent,
  FooterComponent,
  ModalComponent,
  FormSearchComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [...components]
})
export class SharedModule { }
