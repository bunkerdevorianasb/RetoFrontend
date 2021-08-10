import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tool } from 'src/app/models/tool';
import { ToolsService } from 'src/app/services/tools.service';
import { CreateToolComponent } from '../create-tool/create-tool.component';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.css']
})
export class EditToolComponent implements OnInit {

  form!: FormGroup; 

  constructor(
    private formBuild: FormBuilder,
    public dialogRef: MatDialogRef<CreateToolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: tool,
    public toolService: ToolsService
  ) { 
    this.formBuilder();
  }

  ngOnInit(): void {
    console.log(this.data)
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
      let newTool: tool =  {
        id:3,
        title: this.form.value.title,
        link: this.form.value.link,
        description: this.form.value.description,
        tags : tags
      }
      
      let oldnewTool: tool =  this.data;
      console.log(oldnewTool);
      console.log(newTool);
      this.toolService.editTool(oldnewTool, newTool);
    }else{
      this.form.markAllAsTouched();
    }
    
    return true;
  }

  failedInvalid(failed: string){
    return this.form.controls[failed].touched && this.form.controls[failed].invalid;
  }

}
