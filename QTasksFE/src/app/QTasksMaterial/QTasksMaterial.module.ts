import { NgModule } from '@angular/core';
import {MatButtonModule, MatTabsModule, MatCardModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatTabsModule, MatCardModule, MatIconModule],
})
export class QTasksMaterialModule { }
