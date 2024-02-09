import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrl: './novo-veiculo.component.scss'
})
export class NovoVeiculoComponent {

  @Output() closeModal = new EventEmitter<any>();

  public isVisible = true;
  public formVeiculo: FormGroup<any>;

  constructor(private fb: FormBuilder){  
    /**
     * Inicializa o formulario.
    */
    this.formVeiculo = new FormGroup({
      marca: new FormControl<string>('', Validators.required),
      modelo: new FormControl<string>('', Validators.required),
      versao: new FormControl<string>('', Validators.required),
      anoFabricacao: new FormControl<string>('', Validators.required),
      anoModelo: new FormControl<string>('', Validators.required),
      cor: new FormControl<string>(''),
      blindado: new FormControl<boolean>(false),
      kilometragem: new FormControl<string>(''),
      placa: new FormControl<string>('', Validators.required),
      renavam: new FormControl<string>('', Validators.required)
    })
  }

  /**
   * Emite um evento para o componente pai com o formulário preenchido, para adicionar um novo veículo.
   * @returns {emit} Emite um evento para o componente pai contendo o formulario, para que seja adicionado.
  */
  handleOk(): void {
    this.isVisible = false;
    this.closeModal.emit(this.formVeiculo.value);
  }

  /**
   * Emite um evento para o componente pai, apenas para que o modal seja fechado.
  */
  handleCancel(): void {
    this.isVisible = false;
    this.closeModal.emit(null);
  }
}
