function fizzBuzz(num) {
  var val = (num % 3) * 8 + (num % 5);

  switch (val) {
    case 0:
      return 'FizzBuzz';
      break;

    case 1:
    case 2:
    case 3:
    case 4:
      return 'Fizz';
      break;

    case 8:
    case 16:
      return 'Buzz';
      break;

    default:
      return num;
      break;
  }
  return num;
}

function explode(num) {
  var result = [];

  for (var i = 1; i <= num; i++) {
    result.push(fizzBuzz(i));
  }

  return result;
}

function List() {
  return {
    single: function (num) { return fizzBuzz(num); },
    sequence: function (num) { return explode(num); }
  };
}
