import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetospedaPage } from './retospeda.page';

describe('RetospedaPage', () => {
  let component: RetospedaPage;
  let fixture: ComponentFixture<RetospedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetospedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetospedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
