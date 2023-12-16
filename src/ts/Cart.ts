import Movie from "./Movie";

export default class Cart {
  private _list: Movie[] = []
  
  add(item: Movie): void {
    this.list.push(item);
  }

  get list() {
    return this._list;
  }

  removeItem(id: number): Movie[] {
    const index = this._list.findIndex((elem) => elem.id === id);
    return this._list.splice(index, 1);
  }

  totalSum(): number {
    const allSum = this._list.reduce((value: number, item: Movie) => {
      return value + item.price;;
    }, 0)
    return allSum;
  }

  totalSumDiscount(discount: number = 100): number {
    const allSum = this._list.reduce((value: number, item: Movie) => {
      return value + item.price;;
    }, 0)
    return allSum * (1 - discount / 100);
  }
}