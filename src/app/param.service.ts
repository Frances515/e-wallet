import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  paramData: any;
  constructor() { }

  setParam(paramObj) {
    this.paramData = paramObj;
  }

  getParam() {
    return this.paramData;
  }
}
