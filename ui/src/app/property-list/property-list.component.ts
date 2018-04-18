import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property-service';
import { Globals } from '../app-properties';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private propertyService: PropertyService,private globals: Globals) { }

  ngOnInit() {
  }

}
