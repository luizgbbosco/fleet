import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-veiculo',
  templateUrl: './card-veiculo.component.html',
  styleUrl: './card-veiculo.component.scss'
})
export class CardVeiculoComponent {
  @Input() item: any;
  @Output() deleteVeiculo = new EventEmitter<number>();

  public removeVeiculo(id: number): void {
    this.deleteVeiculo.emit(id);
  }

  public cancel(): void {
    console.log('cancel');
  }

  public confirm(id: number): void {
    this.deleteVeiculo.emit(id);
  }
}