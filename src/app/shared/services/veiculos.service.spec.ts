import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  let service: VeiculosService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VeiculosService]
    });
    service = TestBed.inject(VeiculosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve veiculos from API via GET without filter', () => {
    const dummyVeiculos = [
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
      }
    ];

    service.getVeiculos().subscribe(veiculos => {
      expect(veiculos.length).toBe(1);
      expect(veiculos).toEqual(dummyVeiculos);
    });

    const req = httpMock.expectOne(service.URL_API);
    expect(req.request.method).toBe('GET');
    req.flush(dummyVeiculos);
  });

  it('should fetch veiculos from API', () => {
    const filter = '123';
    const mockData = [
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
      }
    ];

    service.getVeiculosFilter(filter).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.URL_API}?q=${filter}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
  
  it('should create veiculo via API', () => {
    const mockPayload = {
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

    const mockResponse = { id: 1, ...mockPayload };

    service.createVeiculo(mockPayload).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service.URL_API);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should delete veiculo via API', () => {
    const veiculoId = 1;

    service.deleteVeiculo(veiculoId).subscribe();
    
    const req = httpMock.expectOne(`${service.URL_API}/${veiculoId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
