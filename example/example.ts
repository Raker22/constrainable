import {Comparable} from '../src/lib/comparable';
import {BinaryConstraint} from '../src/lib/constraints/binary-constraint';
import {NotEqualConstraint} from '../src/lib/constraints/not-equal-constraint';
import {DiscreteDomain} from '../src/lib/domains/discrete-domain';
import {Variable} from '../src/lib/variable';

function printVariables(): void {
  console.log(var1.value.raw);
  console.log(var2.value.raw);
  console.log();
}

const var1: Variable<number> = new Variable(new DiscreteDomain(Comparable.newArray([1, 2])));
const var2: Variable<number> = new Variable(new DiscreteDomain(Comparable.newArray([1, 2])));

printVariables();

const c1: BinaryConstraint<number> = new NotEqualConstraint(var1, var2);
const c2: BinaryConstraint<number> = new NotEqualConstraint(var2, var1);

printVariables();

c1.update();
c2.update();

printVariables();

var1.update(1);

printVariables();
