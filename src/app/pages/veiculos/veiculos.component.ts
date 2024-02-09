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

  /**
   * Dentro do onInit é feito o get para preencher os cards, caso possuam, e o valueChanges acompanha a alteracao no campo de filtro.
  */
  ngOnInit(): void {
    this.getVeiculos(null);
    this.searchField.valueChanges.pipe(
      map(value => value.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => this.getVeiculos(value))
    ).subscribe();
  }

  /**
   * Faz tanto o get geral, quanto o get com a filtragem do campo de busca.
   * @param {string} filter - Campo contendo o que foi preenchido, sempre inicializa como null.
   * @returns {Array} Retorna o array de arquivos para preencher os campos.
  */
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

  /**
   * Abre o modal para adicionar um novo veiculo.
  */
  public openModal(): void{
    this.showModal = true;
  }

  /**
   * Controla o fechamento do modal, tanto quando é inserido um veículo, tanto quando não é, sempre fazendo o refresh dos dados.
   * @param {object} event - Se esse campo retornar algum valor, será feito a insercao de um novo veiculo
   * @returns {Array} Retorna a nova lista de veículos.
  */
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

  /**
   * Recebe o evento do componente filho, para que seja deletado um veículo.
   * @param {number} id - ID do veículo selecioando.
   * @returns {Array} Retorna a nova lista de veículos.
  */
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

  /**
   * Funcao utilizada para recarregar os veículos, remover o loading e limpar o campo de buscar, ápos adicionar ou deletar.
  */
  resetData(){
    this.getVeiculos(null);
    this.loading = false;
    this.searchField.reset();
  }
}
