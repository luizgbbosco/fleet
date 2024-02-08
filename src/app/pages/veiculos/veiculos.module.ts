import { NgModule } from '@angular/core';
import { CardVeiculoComponent } from './components/card-veiculo/card-veiculo.component';
import { VeiculosComponent } from './veiculos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VeiculosComponent,
    CardVeiculoComponent
  ],
  imports: [
    CommonModule,
    NzInputModule, 
    NzIconModule, 
    NzButtonModule,
    NzCardModule
  ],
  exports: [VeiculosComponent],
  providers: []
})
export class VeiculosModule { }
