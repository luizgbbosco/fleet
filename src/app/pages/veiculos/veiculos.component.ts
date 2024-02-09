import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../shared/services/veiculos.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.scss'
})
export class VeiculosComponent implements OnInit{

  searchField = new FormControl();
  public showModal: boolean = false;
  public loading: boolean = false;
  public dataVeiculos: Array<any> = [];

  constructor(
    private service: VeiculosService,
    private message: NzNotificationService
    ){}

  ngOnInit(): void {
    this.searchVeiculos('');
    this.searchField.valueChanges.pipe(
      map(value => value.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => this.searchVeiculos(value))
    ).subscribe();
  }

  searchVeiculos(filter: string): void {
    console.log(`entrou`, filter);
    this.loading = true;
    this.service.getVeiculos(filter).subscribe(
      data => {
        this.dataVeiculos = data;
        this.loading = false;
      }, error => {
        console.error(error);
        this.loading = false;
      }, () => {}
    )
  }

  public openModal(): void{
    this.showModal = true;
  }

  public closeModal(event: any): void{
    if(event != null){
      this.loading = true;
      this.service.createVeiculo(event).subscribe(
        data => {
          this.searchVeiculos('');
          this.loading = false;
          this.message.create('success', 'Criar veículo', 'Veículo criado com sucesso.');
        }, error => {
          this.searchVeiculos('');
          this.loading = false;
          console.error(error);
        }, () => {}
      )
    }
    this.showModal = false;
  }

  public deleteVeiculo(id: number): void {
    this.loading = true;
    this.service.deleteVeiculo(id).subscribe(
      data => {
        this.searchVeiculos('');
        this.message.create('success', 'Deletar veículo', 'Veículo deletado com sucesso.');
        this.loading = false;
      }, error => {
        this.searchVeiculos('');
        console.error(error);
        this.loading = false;
      }, () => {}
    )
  }
}
