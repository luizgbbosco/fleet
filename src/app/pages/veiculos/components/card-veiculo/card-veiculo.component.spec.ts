import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVeiculoComponent } from './card-veiculo.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Veiculo } from '../../../../shared/model/veiculos.model';

describe('CardVeiculoComponent', () => {
  let component: CardVeiculoComponent;
  let fixture: ComponentFixture<CardVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardVeiculoComponent],
      imports: [NzCardModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should render item details correctly', () => {
    const item: Veiculo = 
    {
      marca: "Fiat",
      modelo: "Uno",
      versao: "1.0 MILE FIRE TURBO",
      anoFabricacao: "2002",
      anoModelo: "2003",
      cor: "Preto",
      blindado: true,
      kilometragem: "100000",
      placa: "ads2d05",
      renavam: "12345456564"
    };

    component.item = item;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fw-b .fs-24').textContent).toContain(item.marca);
    expect(compiled.querySelector('.fs-24').textContent).toContain(item.modelo);
    expect(compiled.querySelector('.row .col-8 span').textContent).toContain(item.versao);
    expect(compiled.querySelector('.row .col-4 span').textContent).toContain(`${item.anoFabricacao}/${item.anoModelo}`);
    expect(compiled.querySelector('.row:nth-child(3) .col-4 span').textContent).toContain(item.cor);
    expect(compiled.querySelector('.row:nth-child(3) .col-4 span').textContent).toContain('Sim'); // Blindado true
    expect(compiled.querySelector('.row:nth-child(3) .col-4 span').textContent).toContain(`${item.kilometragem} km`);
    expect(compiled.querySelector('.row:nth-child(4) .col-4 span').textContent).toContain(item.placa);
    expect(compiled.querySelector('.row:nth-child(4) .col-8 span').textContent).toContain(item.renavam);
  });*/

  it('should not emit deleteVeiculo event on cancel()', () => {
    const deleteVeiculoSpy = spyOn(component.deleteVeiculo, 'emit');

    component.cancel();

    expect(deleteVeiculoSpy).not.toHaveBeenCalled();
  });

  it('should emit deleteVeiculo event on confirm()', () => {
    const deleteVeiculoSpy = spyOn(component.deleteVeiculo, 'emit');
    const itemId = 1;

    component.confirm(itemId);

    expect(deleteVeiculoSpy).toHaveBeenCalledWith(itemId);
  });

});
