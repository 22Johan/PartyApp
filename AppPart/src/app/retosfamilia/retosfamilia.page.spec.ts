import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetosfamiliaPage } from './retosfamilia.page';

describe('RetosfamiliaPage', () => {  
  let component: RetosfamiliaPage;
  let fixture: ComponentFixture<RetosfamiliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosfamiliaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetosfamiliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
