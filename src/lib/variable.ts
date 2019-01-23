import {Comparable} from './comparable';
import {BinaryConstraint} from './constraints/binary-constraint';
import {GlobalConstraint} from './constraints/global-constraint';
import {Domain} from './domains/domain';

export class Variable<T> {
  get value(): Comparable<T | null> {
    return this._value;
  }

  dependentConstraints: BinaryConstraint<T>[] = []; // constraints dependent on the variable
  independentConstraints: BinaryConstraint<T>[] = []; // constraints independent of the variable
  globalConstraints: GlobalConstraint<T>[] = [];

  constructor(public domain: Domain<T>, protected _value: Comparable<T | null> = new Comparable(null)) {
    domain.variable = this;
  }

  getNumConflicts(value: Comparable<T> | T): number {
    let numConflicts: number = 0;

    for (const constraint of this.dependentConstraints) {
      if (constraint.dependentVariable.domain.contains(value)) {
        numConflicts++;
      }
    }

    return numConflicts;
  }

  update(value: Comparable<T | null> | T | null): boolean {
    let success: boolean = true;

    // if (value === undefined) {
    //   if (this._value.raw != null) {
    //     this.domain.clear();
    //
    //     success = this.updateConstraints();
    //   }
    // }
    // else {
    this._value.raw = Comparable.unwrap(value);

    if (value != null) {
      this.domain.clear();

      success = this.updateConstraints();
    }
    // }

    return success;
  }

  updateConstraints(): boolean {
    let success: boolean = true;

    for (const constraint of this.dependentConstraints) {
      success = constraint.update();

      if (!success) {
        break;
      }
    }

    return success;
  }
}
