import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionnairesScreenComponent } from './all-questionnaires-screen.component';

describe('AllQuestionnairesScreenComponent', () => {
  let component: AllQuestionnairesScreenComponent;
  let fixture: ComponentFixture<AllQuestionnairesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuestionnairesScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllQuestionnairesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
