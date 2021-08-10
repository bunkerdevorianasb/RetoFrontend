import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateToolComponent } from '../dialog/create-tool/create-tool.component';
import { tool } from '../models/tool';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  tools : tool[] = [];
  
  favoriteTool : tool[] = [];

  constructor(public dialog: MatDialog,
              private toolservice: ToolsService
    ) { }
    

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.tools = this.toolservice.getTools();
    this.favoriteTool = this.toolservice.getFavoriteTools();
  }

  openDialog(){
    this.dialog.open(CreateToolComponent, {
      height:'70%',
      width:'50%'
    });
  }

  

}
