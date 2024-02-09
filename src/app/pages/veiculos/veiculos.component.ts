import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../shared/services/veiculos.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

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
    this.getVeiculos(null);
    this.searchField.valueChanges.pipe(
      map(value => value.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => this.getVeiculos(value))
    ).subscribe();
  }

  getVeiculos(filter: any): void {
    this.loading = true;
    if(filter != null){
      this.service.getVeiculosFilter(filter).subscribe(
        data => {
          this.dataVeiculos = data;
          this.loading = false;
        }, error => {
          console.error(error);
          this.loading = false;
        }, () => {})
    }else {
      this.service.getVeiculos().subscribe(
        data => {
          this.dataVeiculos = data;
          this.loading = false;
        }, error => {
          console.error(error);
          this.loading = false;
        }, () => {})
    }

  }

  public openModal(): void{
    this.showModal = true;
  }

  public closeModal(event: any): void{
    if(event != null){
      this.loading = true;
      this.service.createVeiculo(event).subscribe(
        data => {
          this.resetData();
          this.message.create('success', 'Criar veículo', 'Veículo criado com sucesso.');
        }, error => {
          this.resetData();
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
        this.resetData();
        this.message.create('success', 'Deletar veículo', 'Veículo deletado com sucesso.');
      }, error => {
        this.resetData();
        console.error(error);
      }, () => {}
    )
  }

  resetData(){
    this.getVeiculos(null);
    this.loading = false;
    this.searchField.reset();
  }
}
