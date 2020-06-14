import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FretesPage } from './fretes.page';

describe('FretesPage', () => {
  let component: FretesPage;
  let fixture: ComponentFixture<FretesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FretesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
