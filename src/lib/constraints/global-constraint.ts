import {Variable} from '../variable';
import {BinaryConstraint} from './binary-constraint';

export abstract class GlobalConstraint<T> {
  constructor(public variables: Variable<T>[] = []) {

  }

  protected abstract generateBinaryConstraints(): BinaryConstraint<T>[];
}
