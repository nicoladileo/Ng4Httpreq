import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewtonApiService {
  private NEWTON_ENDPOINT = 'https://newton.now.sh/';

  constructor(public http:Http) { }

  public getDerivative(func: string): Observable<Response> {
    return this.http.get(this.NEWTON_ENDPOINT + 'derive/' + func)
            .map((res) => res.json()) 
            .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  public getIntegrate(func: string): Observable<Response> {
    return this.http.get(this.NEWTON_ENDPOINT + 'integrate/' + func)
            .map((res) => res.json()) 
            .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
