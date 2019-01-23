import {Comparable} from '../comparable';
import {Domain} from './domain';

export class DiscreteDomain<T> extends Domain<T> {
  constructor(public values: Comparable<T>[]) {
    super();
    Comparable.sort(this.values);
  }

  private indexOf(value: Comparable<T> | T): number {
    return this.values.findIndex((val: Comparable<T>) => val.equals(value));
  }

  clear(): void {
    this.values = [];
  }

  contains(value: Comparable<T> | T): boolean {
    return this.indexOf(value) >= 0;
  }

  remove(value: Comparable<T> | T): void {
    this.values.splice(this.indexOf(value), 1);

    this.checkSolved();
  }

  removeGreaterThan(value: Comparable<T> | T): void {
    let removeAfterIndex: number = 0;

    for (const val of this.values) {
      if (val.isGreaterThan(value)) {
        break;
      }
      else {
        removeAfterIndex++;
      }
    }

    this.values.splice(removeAfterIndex, this.values.length - removeAfterIndex);

    this.checkSolved();
  }

  removeGreaterThanOrEqual(value: Comparable<T> | T): void {
    let removeAfterIndex: number = 0;

    for (const val of this.values) {
      if (val.isGreaterThanOrEquals(value)) {
        break;
      }
      else {
        removeAfterIndex++;
      }
    }

    this.values.splice(removeAfterIndex, this.values.length - removeAfterIndex);

    this.checkSolved();
  }

  removeLessThan(value: Comparable<T> | T): void {
    let numToRemove: number = 0;

    for (const val of this.values) {
      if (val.isLessThan(value)) {
        numToRemove++;
      }
      else {
        break;
      }
    }

    this.values.splice(0, numToRemove);

    this.checkSolved();
  }

  removeLessThanOrEqual(value: Comparable<T> | T): void {
    let numToRemove: number = 0;

    for (const val of this.values) {
      if (val.isLessThanOrEquals(value)) {
        numToRemove++;
      }
      else {
        break;
      }
    }

    this.values.splice(0, numToRemove);

    this.checkSolved();
  }
}
