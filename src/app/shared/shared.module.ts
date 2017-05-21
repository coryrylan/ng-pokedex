import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...components,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [...components]
})
export class SharedModule { }
