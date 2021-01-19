import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Input() title: string = "Angular Calculator!!!";
  @Input("ref") count: number = 20;
  finalValue: number = 1000;
  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

  type(value) {
    this.finalValue = value;
  }
  
}
