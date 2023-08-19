function confirmEnding(str, target) {
    if (target.length === 1) {
        return str[str.length - 1] === target;
    }

    let spacedWord = str.split(/\s+/);
    let lastWord = spacedWord[spacedWord.length - 1]

    if(lastWord.length < target.length){
      return false;
    }

    for(let i = 1; i <= target.length; i++){
      if(lastWord[lastWord.length - i] !== target[target.length - i]){
        return false;
      }
    }

    return true;
    
}

let result = confirmEnding("Open sesame", "same");
console.log(result);
