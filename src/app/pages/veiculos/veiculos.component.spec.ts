import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeiculosComponent } from './veiculos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { VeiculosService } from '../../shared/services/veiculos.service';
import { of } from 'rxjs';

describe('VeiculosComponent', () => {
  let component: VeiculosComponent;
  let fixture: ComponentFixture<VeiculosComponent>;
  let veiculosServiceSpy: jasmine.SpyObj<VeiculosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeiculosComponent],
      imports: [
        HttpClientTestingModule, 
        NzInputModule, 
        FormsModule, 
        ReactiveFormsModule, 
        NzIconModule, 
        NzButtonModule,
        NzCardModule,
        NzModalModule,
        NzCheckboxModule,
        NzNotificationModule,
        NzPopconfirmModule,
        NzSpinModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getVeiculos() on ngOnInit()', () => {
    const searchVeiculosSpy = spyOn(component, 'getVeiculos');

    component.ngOnInit();

    expect(searchVeiculosSpy).toHaveBeenCalledWith(null);
  });

  it('should open modal', () => {
    component.openModal();
    expect(component.showModal).toBeTrue();
  });

  it('should close modal', () => {
    component.closeModal(null);
    expect(component.showModal).toBeFalsy();
  });

  it('should render search input with search icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const searchInput = compiled.querySelector('input[nz-input]');
    expect(searchInput).toBeTruthy();

    const searchIcon = compiled.querySelector('span[nz-icon][nzType="search"]');
    expect(searchIcon).toBeTruthy();
  });

  it('should render "Adicionar" button', () => {
    const compiled = fixture.debugElement.nativeElement;
    const addButton = compiled.querySelector('button[nzType="default"]');
    expect(addButton).toBeTruthy();
    expect(addButton.textContent).toContain('Adicionar');
  });

  it('should render "Nenhum veículo encontrado" message when dataVeiculos is empty', () => {
    component.dataVeiculos = [];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const messageElement = compiled.querySelector('.container.d-flex.justify-content-center h4');
    expect(messageElement).toBeTruthy();
    expect(messageElement.textContent).toContain('Nenhum veículo encontrado.');
  });

  it('should render nz-spin when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const spinElement = compiled.querySelector('nz-spin');
    expect(spinElement).toBeTruthy();
  });

  it('should not render nz-spin when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const spinElement = compiled.querySelector('nz-spin');
    expect(spinElement).toBeFalsy();
  });

  it('should not render app-novo-veiculo when showModal is false', () => {
    component.showModal = false;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const novoVeiculoElement = compiled.querySelector('app-novo-veiculo');
    expect(novoVeiculoElement).toBeFalsy();
  });

  /*it('should delete veiculo and reset data', () => {
    const dummyVeiculoId = 1;
    component.deleteVeiculo(dummyVeiculoId);
    expect(component.loading).toBe(true);
    expect(veiculosServiceSpy.deleteVeiculo).toHaveBeenCalledWith(dummyVeiculoId);
  });

  it('should close modal and reset data', () => {
    const dummyEvent = { data: 'dummy' };
    component.closeModal(dummyEvent);
    expect(component.showModal).toBe(false);
    expect(component.loading).toBe(false);
    expect(veiculosServiceSpy.createVeiculo).toHaveBeenCalledWith(dummyEvent);
  });*/

});
