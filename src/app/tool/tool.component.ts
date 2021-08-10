import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditToolComponent } from '../dialog/edit-tool/edit-tool.component';
import { tool } from '../models/tool';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  @Input() tool!: tool;

  constructor(
    public dialog: MatDialog,
    public toolservice: ToolsService) { }

  ngOnInit(): void {
  }

  eliminar(tool: tool){
    this.toolservice.deleteTool(tool);
  }

  openModalEdit(){
    const dialogRef = this.dialog.open(EditToolComponent,{
      height:'70%',
      width:'50%',
      data: {
        tool: this.tool,
      }
    });
  }

}
