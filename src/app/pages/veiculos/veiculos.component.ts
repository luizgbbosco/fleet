import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoVeiculoComponent } from './components/novo-veiculo/novo-veiculo.component';
import { CardVeiculoComponent } from './components/card-veiculo/card-veiculo.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  imports: [CommonModule, NovoVeiculoComponent, CardVeiculoComponent, NzInputModule, NzIconModule, NzButtonModule],
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.scss'
})

export class VeiculosComponent {
  public arr = [
    {teste: 123},
    {teste: 123},
    {teste: 123},
    {teste: 123},
    {teste: 123},
    {teste: 123},
    {teste: 123},
    {teste: 123},
  ]
}
