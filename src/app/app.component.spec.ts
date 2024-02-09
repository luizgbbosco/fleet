import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { VeiculosModule } from './pages/veiculos/veiculos.module';
import { VeiculosService } from './shared/services/veiculos.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NzPageHeaderModule,
        VeiculosModule,
        HttpClientModule 
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the page header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.page-header')).toBeTruthy();
  });

  it('should create the app-veiculos component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-veiculos')).toBeTruthy();
  });

});
