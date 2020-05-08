import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DataChangeRegistrar, DataService } from '../data.service';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb-component.component.html',
  styleUrls: ['./dumb-component.component.scss']
})
export class DumbComponentComponent implements OnInit, DataChangeRegistrar {

  @Input('displayname') name: string;
  value: string;

  constructor(private ref: ChangeDetectorRef, private dataService: DataService) {
    
  }

  inputUpdatedDataHere = (stringy: string) => {
    this.value = stringy;
    this.ref.detectChanges();
  }

  ngOnInit() {
    this.value = this.dataService.registerForChangeInformation(this, this.name);
  }


  ngAfterViewInit(){
    this.ref.detach();
  }

  printTestInput(){
    console.log(this.value)
  }

  onValueBlur(){
    this.dataService.setDataForIdentifier(this.name, this.value)
  }

}
