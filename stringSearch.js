// Notes -- understanding continue and break;
function searchString(long, short) {
  let total = 0;

  for ( let i = 0; i < long.length; i++ ) {
    for ( let j = 0; j < short.length; j++ ) {
      if (long[j + i] !=== short[j]) {
        break;
      }

      if ( j === short.length - 1) {
        total += 1;
        i += short.length - 1;
      }
    }
  }
  return total;
}


// Second Solution using indexOf

function searchString(long, short) {
  let unique = 0;
  let position = 0;

  while (long.indexOf(short, position) !== -1) {
    unique++;
    position = long.indexOf(short, position) + 1;
  }

  return unique;
}
