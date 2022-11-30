import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetosamigosPage } from './retosamigos.page';

describe('RetosamigosPage', () => {
  let component: RetosamigosPage;
  let fixture: ComponentFixture<RetosamigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosamigosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetosamigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
