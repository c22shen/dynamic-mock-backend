import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule,
  MatSidenavModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModule { }