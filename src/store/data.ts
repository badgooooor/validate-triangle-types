import { action, observable } from 'mobx'

class Datastore {
  @observable sideA: number = 0;
  @observable sideB: number = 0;
  @observable sideC: number = 0;
  @observable result: string = '';

  @action
  setData(_sideA: number, _sideB: number, _sideC: number, _result: string) {
    this.sideA = _sideA;
    this.sideB = _sideB;
    this.sideC = _sideC;
    this.result = _result;
  }
}

export const data_store = new Datastore();
