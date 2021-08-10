import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tool } from 'src/app/models/tool';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-create-tool',
  templateUrl: './create-tool.component.html',
  styleUrls: ['./create-tool.component.css']
})
export class CreateToolComponent implements OnInit {

  form!: FormGroup; 

  constructor(
    private formBuild: FormBuilder,
    public dialogRef: MatDialogRef<CreateToolComponent>,
    private toolService: ToolsService
  ) { 
    this.formBuilder();
  }

  ngOnInit(): void {
  }

  private formBuilder(){
    this.form = this.formBuild.group({
      title: ['',[Validators.required]],
      link: ['',[Validators.required]],
      description: ['',[Validators.required]],
      tags: ['',[Validators.required]]
    });
  }

  aceptar(event: Event){
    if(this.form.valid){
      const string = new String (this.form.value.tags);
      let tags = string.split(",");
      let tool: tool =  {
        id:3,
        title: this.form.value.title,
        link: this.form.value.link,
        description: this.form.value.description,
        tags : tags
      }
      this.toolService.createTool(tool);
      this.dialogRef.close();
    }else{
      this.form.markAllAsTouched();
    }
    
    return true;
  }

  failedInvalid(failed: string){
    return this.form.controls[failed].touched && this.form.controls[failed].invalid;
  }

}
