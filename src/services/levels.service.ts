import { Injectable } from '@angular/core';

@Injectable()
export class LevelService {
  constructor() { }

  async getName() {
      const response = await fetch('../../assets/data.json');
      const result = await response.text();
      return result;
  }

  async getReaders() {
    const readers = await fetch('../../assets/readers.json');
    const res = await readers.text();
    return res;
  }

  async getTypes() {
    const types = await fetch('../../assets/types.json');
    const res = await types.text();
    return res;
  }
}
