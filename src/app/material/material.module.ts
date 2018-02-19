import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule,
  MatSidenavModule
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
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }