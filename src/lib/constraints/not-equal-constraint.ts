import {BinaryConstraint} from './binary-constraint';
import {Comparable} from '../comparable';

export class NotEqualConstraint<T> extends BinaryConstraint<T> {
  update(): boolean {
    let success: boolean = true;
    const value: Comparable<T | null> = this.independentVariable.value;

    if (value.raw != null) {
      if (this.dependentVariable.value.equals(value)) {
        success = false;
      }
      else {
        this.dependentVariable.domain.remove(value as Comparable<T>);
      }
    }

    return success;
  }
}
