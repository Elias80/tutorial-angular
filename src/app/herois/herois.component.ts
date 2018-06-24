import { Component, OnInit } from '@angular/core';
import { Heroi } from '../heroi';
import { HEROIS } from '../mock-herois';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  
  heroi: Heroi = {
    id: 5,
    nome: "Batman",
  };

  herois = HEROIS;
  
  constructor() { }

  ngOnInit() {
  }

}
