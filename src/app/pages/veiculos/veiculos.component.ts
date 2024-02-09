import { Component } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.scss'
})
export class VeiculosComponent {

  public showModal: boolean = false;

  public arr = [
    {teste: 123},
    {teste: 123}
  ]

  public openModal(){
    this.showModal = true;
  }

  closeModal(event: boolean){
    this.showModal = event;
  }
}
