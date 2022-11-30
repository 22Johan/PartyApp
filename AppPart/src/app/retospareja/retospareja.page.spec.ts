import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetosparejaPage } from './retospareja.page';

describe('RetosparejaPage', () => {
  let component: RetosparejaPage;
  let fixture: ComponentFixture<RetosparejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosparejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetosparejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
