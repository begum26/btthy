import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private dataObs$ = new Subject();

  getData() {
    return this.dataObs$;
}

updateData(data: string) {
  this.dataObs$.next(data);
}

  constructor() { }
}
