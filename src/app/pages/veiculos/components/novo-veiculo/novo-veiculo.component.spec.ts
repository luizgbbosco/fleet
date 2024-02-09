import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoVeiculoComponent } from './novo-veiculo.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NovoVeiculoComponent', () => {
  let component: NovoVeiculoComponent;
  let fixture: ComponentFixture<NovoVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoVeiculoComponent],
      imports: [NzModalModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a formVeiculos with expected controls', () => {
    expect(component.formVeiculo).toBeDefined();
    expect(component.formVeiculo.get('marca')).toBeTruthy();
    expect(component.formVeiculo.get('modelo')).toBeTruthy();
    expect(component.formVeiculo.get('versao')).toBeTruthy();
    expect(component.formVeiculo.get('anoFabricacao')).toBeTruthy();
    expect(component.formVeiculo.get('anoModelo')).toBeTruthy();
    expect(component.formVeiculo.get('cor')).toBeTruthy();
    expect(component.formVeiculo.get('blindado')).toBeTruthy();
    expect(component.formVeiculo.get('kilometragem')).toBeTruthy();
    expect(component.formVeiculo.get('placa')).toBeTruthy();
    expect(component.formVeiculo.get('renavam')).toBeTruthy();
  });

  it('should emit form value on handleOk()', () => {
    const closeModalSpy = spyOn(component.closeModal, 'emit');
    const formData =   { 
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

    component.formVeiculo.setValue(formData);
    component.handleOk();

    expect(closeModalSpy).toHaveBeenCalledWith(formData);
  });

  it('should emit null on handleCancel()', () => {
    const closeModalSpy = spyOn(component.closeModal, 'emit');

    component.handleCancel();

    expect(closeModalSpy).toHaveBeenCalledWith(null);
  });
});
