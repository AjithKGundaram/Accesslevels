import { Injectable } from '@angular/core';
//import { Http } from '@angular/httpClient';

@Injectable()
export class LevelService {
  constructor(
    //private http: Http
  ) {}


  async getName() {
      const response = await fetch('../../assets/data.json');
      const result = response.text();
      return result;
  }

  async getReaders() {
    const readers = await fetch('../../assets/readers.json');
    const res = readers.text();
    return res;
  }
}
