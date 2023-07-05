import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports:[
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
