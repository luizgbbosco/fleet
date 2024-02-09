import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-veiculo',
  templateUrl: './card-veiculo.component.html',
  styleUrl: './card-veiculo.component.scss'
})
export class CardVeiculoComponent {
  @Input() item: any;
  @Output() deleteVeiculo = new EventEmitter<number>();

 /**
   * Basicamente utilizada para fechar o popconfirm, não funciona sem ela.
 */
  public cancel(): void {}

  /**
   * Confirma o delete de um veículo.
   * @param {number} id - ID do veículo selecionado.
   * @returns {emit} Emite um evento para o componente pai, para que seja feito do delete.
  */
  public confirm(id: number): void {
    this.deleteVeiculo.emit(id);
  }
}