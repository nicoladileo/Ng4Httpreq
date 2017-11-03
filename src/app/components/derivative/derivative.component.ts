import { Component, OnInit, Input } from '@angular/core';
import { NewtonApiService } from '../../services/newton-api.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'derivative',
  templateUrl: './derivative.component.html',
  styleUrls: ['./derivative.component.css']
})
export class DerivativeComponent implements OnInit {
  
  private functionName: string;
  private operation;

  constructor(public newtonApi: NewtonApiService) {
    this.functionName = '';
    this.operation = new Operation();
   }
  
  ngOnInit() {
    
  }

  computeDerivative() {
    this.newtonApi.getDerivative(this.functionName).subscribe(
      result => {
        this.operation = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
