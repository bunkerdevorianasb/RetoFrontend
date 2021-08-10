import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../material/material.module';
import { ToolsService } from '../services/tools.service';
import { HomeComponent } from './home.component';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('HomeComponent', () => {
  let component : HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let toolServiceSpy: jasmine.SpyObj<ToolsService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync (() => {
    toolServiceSpy = jasmine.createSpyObj<ToolsService>('ToolsService', ['getTools', 'getFavoriteTools']);
    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ 
        MaterialModule
      ],
      providers: [
        {provide: ToolsService, useValue:toolServiceSpy},
        {provide: MatDialog, useValue:dialogSpy }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HomeComponent);
  });

  it('The load method must initialize the Tools and FavoriteTools', () => {
    toolServiceSpy.getTools.and.returnValue([{ 
      title:'Git', 
      link:'https://www.github.com', 
      description: 'Herramienta de control de versiones', 
      tags: ['organizacion', 'versiones']}]);

      toolServiceSpy.getFavoriteTools.and.returnValue([{ 
      title:'Git', 
      link:'https://www.github.com', 
      description: 'Herramienta de control de versiones', 
      tags: ['organizacion', 'versiones']}
    ]);

    component.load();

    expect(component.tools.length).toBe(1);
    expect(component.favoriteTool.length).toBe(1);
  });

  it('The OpenDialog method should open the create tool modal', () => {
    component.openDialog();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

});
