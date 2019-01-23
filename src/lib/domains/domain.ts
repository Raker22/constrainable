import {Comparable} from '../comparable';
import {Variable} from '../variable';

export abstract class Domain<T> {
  variable: Variable<T>;

  abstract get values(): Comparable<T>[];
  checkSolved(): void {
    if (this.variable.value.raw == null && this.values.length === 1) {
      this.variable.update(this.values[0]);
    }
  }

  abstract clear(): void;
  abstract contains(value: Comparable<T> | T): boolean;
  abstract remove(value: Comparable<T> | T): void;
  abstract removeLessThanOrEqual(value: Comparable<T> | T): void;
  abstract removeLessThan(value: Comparable<T> | T): void;
  abstract removeGreaterThanOrEqual(value: Comparable<T> | T): void;
  abstract removeGreaterThan(value: Comparable<T> | T): void;
}
