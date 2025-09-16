import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calc',
  standalone: false,
  templateUrl: './my-calc.component.html',
  styleUrl: './my-calc.component.scss'
})
export class MyCalcComponent {
  public first: number = 1;
  public second: number = 1;

  public operation: string = '+';

  public operations: string[] = ['+', '-', '/', '*'];

  public result?: number;

  public calc(op: string){
    
  }
}
