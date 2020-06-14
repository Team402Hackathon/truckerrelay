import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuFretePage } from './meu-frete.page';

describe('MeuFretePage', () => {
  let component: MeuFretePage;
  let fixture: ComponentFixture<MeuFretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuFretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuFretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
