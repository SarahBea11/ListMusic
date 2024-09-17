import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMusicComponent } from './register.music.component';

describe('RegisterMusicComponent', () => {
  let component: RegisterMusicComponent;
  let fixture: ComponentFixture<RegisterMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
