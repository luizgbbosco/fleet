import { NgModule } from '@angular/core';
import { CardVeiculoComponent } from './components/card-veiculo/card-veiculo.component';
import { VeiculosComponent } from './veiculos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CommonModule } from '@angular/common';
import { NovoVeiculoComponent } from './components/novo-veiculo/novo-veiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    VeiculosComponent,
    CardVeiculoComponent,
    NovoVeiculoComponent
  ],
  imports: [
    CommonModule,
    NzInputModule, 
    NzIconModule, 
    NzButtonModule,
    NzCardModule,
    NzModalModule,
    NzCheckboxModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [VeiculosComponent],
  providers: [provideNgxMask()]
})
export class VeiculosModule { }
