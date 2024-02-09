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

  handleOk(): void {
    this.isVisible = false;
    this.closeModal.emit(this.formVeiculo.value);
  }

  handleCancel(): void {
    debugger;
    this.isVisible = false;
    this.closeModal.emit(null);
  }
}
