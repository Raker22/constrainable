export class Comparable<T> {
  static unwrap<T>(value: Comparable<T> | T): T {
    return value instanceof Comparable ? value.raw : value;
  }

  static sort<T>(values: Comparable<T>[]): Comparable<T>[] {
    return values.sort((val1: Comparable<T>, val2: Comparable<T>) => val1.compare(val2));
  }

  static newArray<T>(values: T[]): Comparable<T>[] {
    return values.map((value: T) => new Comparable(value));
  }

  constructor(public raw: T) {

  }

  equals(other: Comparable<T> | T): boolean {
    return this.raw === Comparable.unwrap(other);
  }

  isGreaterThan(other: Comparable<T> | T): boolean {
    return this.raw > Comparable.unwrap(other);
  }

  isGreaterThanOrEquals(other: Comparable<T> | T): boolean {
    return this.raw >= Comparable.unwrap(other);
  }

  isLessThan(other: Comparable<T> | T): boolean {
    return this.raw < Comparable.unwrap(other);
  }

  isLessThanOrEquals(other: Comparable<T> | T): boolean {
    return this.raw <= Comparable.unwrap(other);
  }

  compare(other: Comparable<T> | T): number {
    return this.equals(other) ? 0 : this.isGreaterThan(other) ? 1 : -1;
  }
}
