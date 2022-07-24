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
        i += short.length - 1; // optimization -- after the short word is found, it cannot be found again within the index containing it, so we need to add its length to continue searching
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

// Both solutions are O(n^2) because they both use two loops.