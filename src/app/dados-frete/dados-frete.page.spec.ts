import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosFretePage } from './dados-frete.page';

describe('DadosFretePage', () => {
  let component: DadosFretePage;
  let fixture: ComponentFixture<DadosFretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosFretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosFretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
