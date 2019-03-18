import { Component, OnInit } from '@angular/core';
import {arr} from '../../app/jsondata';
@Component({
  selector: 'app-bodycomp',
  templateUrl: './bodycomp.component.html',
  styleUrls: ['./bodycomp.component.css']
})
export class BodycompComponent implements OnInit {

  constructor() { }
  jsonobj = arr;
  
  ngOnInit() {
    console.log("teena");
  }
  

}
