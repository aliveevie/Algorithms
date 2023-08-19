function findLongestWordLength(str) {
  str = str.split(' ');
  let lens = [];
  let max;
  for(let i = 0; i < str.length; i++){
      lens.push(str[i].length);
      max = Math.max(...lens)
  }
  return max;
}

let result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);
