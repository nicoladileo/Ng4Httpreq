import { Component, OnInit, Input } from '@angular/core';
import { NewtonApiService } from '../../services/newton-api.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'integrate',
  templateUrl: './integrate.component.html',
  styleUrls: ['./integrate.component.css']
})
export class IntegrateComponent implements OnInit {
  
  private functionName: string;
  private operation;

  constructor(public newtonApi: NewtonApiService) {
    this.functionName = '';
    this.operation = new Operation();
   }
  
  ngOnInit() {
    
  }

  computeIntegrate() {
    this.newtonApi.getIntegrate(this.functionName).subscribe(
      result => {
        this.operation = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
