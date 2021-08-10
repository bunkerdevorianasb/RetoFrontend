import { TestBed } from '@angular/core/testing';

import { ToolsService } from './tools.service';
import { tool } from '../models/tool';

describe('ToolsService', () => {
  let service: ToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service).toBeDefined();
    expect(service).toBeInstanceOf(ToolsService);
  });

  it('the getTools method returns the value of the array tool', () => {
    expect(service.getTools()).toBeDefined();

  });

  it('the getTools method returns the value of the array tool', () => {
    expect(service.getFavoriteTools()).toBeDefined();

  });

  it('the createTools method push the tool in the array', () => {
    expect(service.getTools()).toBeDefined();

    const toolsData : tool [] = service.getTools();
    
    const newTool : tool = {
      id : 3,
      title : 'GitHub',
      link : 'https://github.com/',
      description : 'Herramienta ',
      tags : [
        'planificar',
        'organizar'
      ]
    }

    toolsData.push(newTool);

    service.createTool(newTool);
    const tools2 = service.getTools();
    expect(tools2).toEqual(toolsData);

  });

  it('the delete method ', () => {
    expect(service.getTools()).toBeDefined();

    const toolsData : tool [] = service.getTools();

    const deleteTool : tool = {
      id : 3,
      title : 'GitHub',
      link : 'https://github.com/',
      description : 'Herramienta ',
      tags : [
        'planificar',
        'organizar'
      ]
    }
    let i = toolsData.indexOf(deleteTool);
    toolsData.splice(i,1);

    service.deleteTool(deleteTool);
    
    const tools2 = service.getTools();
    expect(tools2).toEqual(toolsData);

  });
  
});
