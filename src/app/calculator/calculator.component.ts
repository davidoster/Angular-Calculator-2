import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  title: string = "Angular Calculator!!!";
  firstValue: any; // 1st operand
  secondValue: any; // 2nd operand
  operator: any; // operation
  lcdValue: any; // lcd display
  maxChars: number = 4;

  constructor() { 
    console.log(this.title);
    this.clear();
    console.log(this.operator);

  }

  ngOnInit() {
    
  }

  getNumber(value) {
    if(this.operator == null) {
      if(this.firstValue == 0) {
        this.firstValue = value;
        //console.log(this.firstValue);
      } else {
        this.firstValue =  this.firstValue + '' + value;
        //console.log(this.firstValue);
      }
      this.lcdValue = this.firstValue;
    } else {
      if(this.secondValue == 0) {
        this.secondValue = value;
        console.log(this.secondValue);
      } else {
        this.secondValue =  this.secondValue + '' + value;
        console.log(this.secondValue);
      }
      this.lcdValue = this.secondValue;
    }
  }

  getOperator(value) {
    this.operator = value;
    console.log(this.operator);
  }

  calculate() {
    switch(this.operator) {
      case '+':
        this.lcdValue = this.firstValue + this.secondValue;
        break;
    }
    
  }

  type(value) {
    this.lcdValue /= value;
  }

  clear() {
    this.firstValue = 0;
    this.secondValue = 0;
    this.operator = null;
    this.lcdValue = 0;
  }
  
}
