import {Variable} from '../variable';
import {GlobalConstraint} from './global-constraint';
import {NotEqualConstraint} from './not-equal-constraint';
import {BinaryConstraint} from './binary-constraint';

export class AllDifferentConstraint<T> extends GlobalConstraint<T> {
  protected generateBinaryConstraints(): BinaryConstraint<T>[] {
    const constraints: BinaryConstraint<T>[] = [];

    for (let i: number = 0; i < this.variables.length - 1; i++) {
      const var1: Variable<T> = this.variables[i];

      for (let j: number = i + 1; j < this.variables.length; j++) {
        const var2: Variable<T> = this.variables[j];
        constraints.push(new NotEqualConstraint(var1, var2), new NotEqualConstraint(var2, var1));
      }
    }

    return constraints;
  }
}
