import { Injectable } from '@angular/core';
import { tool } from '../models/tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  
  tools : tool[] = [
    {
      id : 1,
      title : 'Notion',
      link : 'https://notion.so',
      description : 'Herramienta todo en uno para organizar equipos e ideas. Escribe, planifica, colabora y logra organizarte',
      tags : [
        'planificar',
        'organizar'
      ]
    }, 
    {
      id : 2,
      title : 'GitHub',
      link : 'https://github.com/',
      description : 'Herramienta ',
      tags : [
        'planificar',
        'organizar'
      ]
    }, 
    {
      id : 3,
      title : 'Git',
      link : 'https://git-scm.com/',
      description : 'Git es un sistema de control de versiones distribuido de código abierto y gratuito',
      tags : [
        'sistema',
        'codigo abierto'
      ]
    },
    {
      id : 4,
      title : 'Visual Studio Code',
      link : 'https://code.visualstudio.com/',
      description : 'Editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS',
      tags : [
        'Editor',
        'Codigo',
      ]
    },
    {
      id : 5,
      title : 'Postman',
      link : 'https://www.postman.com',
      description : 'Simplifica cada paso del ciclo de vida de la API y agiliza la colaboración para que pueda crear mejores API, más rápido.',
      tags : [
        'Api',
        'Simplifica'
      ]
    },
  ] 
  
  favoriteTool : tool[] = [
    {
      id : 1,
      title : 'Notion',
      link : 'https://notion.so',
      description : 'Herramienta todo en uno para organizar equipos e ideas. Escribe, planifica, colabora y logra organizarte',
      tags : [
        'planificar',
        'organizar'
      ]
    },
  ]

  constructor() { }

  public createTool(newTool: tool){
    this.tools.push(newTool);
  }
  
  public deleteTool(deleteTool: tool){
    let i = this.tools.indexOf(deleteTool);
    this.tools.splice(i,1);
  }

  public editTool(oldTool: tool,editTool: tool){
    console.log(oldTool)
    console.log(editTool)
    let i = this.tools.indexOf(oldTool);
    console.log(i);
    console.log(this.tools[i]);
    this.tools[i] = editTool;
    console.log(this.tools[i]);
  }

  public getTools(){
    return this.tools;
  }

  public getFavoriteTools(){
    return this.favoriteTool;
  }

  public setTools(tools: tool[]){
    this.tools = tools;
  }

  public setFavoriteTools(tools: tool[]){
    this.tools = tools;
  }

}
