/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  // Write function HERE
if (kind ==='chicken'){
   if (internalTemp >= 165){
    return true;
   }
} else if (kind === 'beef' && internalTemp >=125 && doneness === 'rare'){
  return true;
} else if (kind === 'beef' && internalTemp >=138 && doneness === 'medium'){
  return true;
}  else if(kind === 'beef' && internalTemp >=155 && doneness === 'well'){
  return true;
 }
 return false;
}



// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true