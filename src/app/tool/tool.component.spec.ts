import { query } from '@angular/animations';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { EditToolComponent } from '../dialog/edit-tool/edit-tool.component';
import { MaterialModule } from '../material/material.module';
import { tool } from '../models/tool';
import { ToolsService } from '../services/tools.service';

import { ToolComponent } from './tool.component';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;
  let toolServiceSpy: jasmine.SpyObj<ToolsService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(waitForAsync (() => {
    
    toolServiceSpy = jasmine.createSpyObj<ToolsService>('ToolsService', ['deleteTool']);
    dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [ ToolComponent ],
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
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
