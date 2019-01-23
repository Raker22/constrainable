import {Variable} from '../variable';

export abstract class BinaryConstraint<T> {
  constructor(public dependentVariable: Variable<T>, public independentVariable: Variable<T>) {
    this.dependentVariable.independentConstraints.push(this);
    this.independentVariable.dependentConstraints.push(this);
  }

  abstract update(): boolean;
}
