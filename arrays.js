var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(ary, ele) {
  return [ele, ...ary];
};

function destructivelyAddElementToBeginningOfArray(ary, ele) {
  ary.unshift(ele);
  return ary;
};

function addElementToEndOfArray(ary, ele) {
  return [...ary, ele];
};

function destructivelyAddElementToEndOfArray(ary, ele) {
  ary.push(ele);
  return ary;
}

function accessElementInArray(ary, i) {
  return ary[i]
}

function destructivelyRemoveElementFromBeginningOfArray(ary, ele) {
  ary.shift()
  return ary
}

function removeElementFromBeginningOfArray(ary) {
  return ary.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(ary) {
  ary.pop()
  return ary

}

function removeElementFromEndOfArray(ary) {
  ary.pop()
  return ary
}
