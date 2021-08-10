import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { tool } from 'src/app/models/tool';
import { ToolsService } from 'src/app/services/tools.service';

import { CreateToolComponent } from './create-tool.component';

describe('CreateToolComponent', () => {
  let component: CreateToolComponent;
  let fixture: ComponentFixture<CreateToolComponent>;
  let toolsServiceSpy: jasmine.SpyObj<ToolsService>;
  let dialogSpy: jasmine.SpyObj<MatDialogRef<CreateToolComponent>>;

  beforeEach(waitForAsync( () => {

    toolsServiceSpy = jasmine.createSpyObj<ToolsService>('ToolsServices',['createTool']);
    dialogSpy = jasmine.createSpyObj<MatDialogRef<CreateToolComponent>>('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [ CreateToolComponent ],
      imports: [     
        ReactiveFormsModule,
        FormsModule   
      ],
      providers: [
        { provide: ToolsService, useValue: toolsServiceSpy },
        { provide: MatDialogRef, useValue: dialogSpy}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(CreateToolComponent);
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('the title field validity', () => {
    let errors : any ;
    let title = component.form.controls['title'];

    expect(title.valid).toBeFalsy();

    //Si no existe valor
    errors = title.errors?.required;
    expect(errors).toBeTruthy();

    //si existe valor 
    title.setValue('test');
    errors = title.errors?.required;
    expect(errors).toBeFalsy();
  });

  it('the link field validity', () => {
    let errors : any = {};
    let link = component.form.controls['link'];

    expect(link.valid).toBeFalsy();

    //Si no existe valor
    errors = link.errors?.required;
    expect(errors).toBeTruthy();

    //si existe valor 
    link.setValue('http://www.herramienta.com');
    errors = link.errors?.required;
    expect(errors).toBeFalsy();
  });

  it('the description field validity', () => {
    let errors : any ;
    let description = component.form.controls['description'];

    expect(description.valid).toBeFalsy();

    //Si no existe valor
    errors = description.errors?.required;
    expect(errors).toBeTruthy();

    //si existe valor 
    description.setValue('la herramienta se utiliza para');
    errors = description.errors?.required;
    expect(errors).toBeFalsy();
  });

  it('the tags field validity', () => {
    let errors : any = {};
    let tags = component.form.controls['tags'];

    expect(tags.valid).toBeFalsy();

    //Si no existe valor
    errors = tags.errors?.required;
    expect(errors).toBeTruthy();

    //si existe valor 
    tags.setValue('organizacion,orden');
    errors = tags.errors?.required;
    expect(errors).toBeFalsy();
  });

  it('If the method is executed accept', ()=>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue("GitHub");
    component.form.controls['link'].setValue("https://www.github.com");
    component.form.controls['description'].setValue("Controlador de verisiones");
    component.form.controls['tags'].setValue("organizacion,versiones,git");
    expect(component.form.valid).toBeTruthy();

    let tool: tool;

    expect(component.aceptar(component.form.value)).toBeTruthy();
  });

  it('The modal was closed', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue("GitHub");
    component.form.controls['link'].setValue("https://www.github.com");
    component.form.controls['description'].setValue("Controlador de verisiones");
    component.form.controls['tags'].setValue("organizacion,versiones,git");
    expect(component.form.valid).toBeTruthy();
    component.aceptar(component.form.value);
    expect(dialogSpy.close).toHaveBeenCalled();
  });

  it('The method createTool have called', () =>{
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue("GitHub");
    component.form.controls['link'].setValue("https://www.github.com");
    component.form.controls['description'].setValue("Controlador de verisiones");
    component.form.controls['tags'].setValue("organizacion,versiones,git");
    expect(component.form.valid).toBeTruthy();
    component.aceptar(component.form.value);
    expect(toolsServiceSpy.createTool).toHaveBeenCalled();
  })

});
