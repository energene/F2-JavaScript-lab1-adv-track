var
  obj1 = {value: 1},
  obj2 = {value: 2},
  obj3 = {value: 3};

var ValueCollect = function() {
  var values = [];
  var operation = function(obj) {
    if (obj) {
      values.push(obj.value);
      return values;
    }
    else {
      return values;
    }
  };
};

var accumulator = ValueCollect();
accumulator(obj1);
accumulator(obj2);
