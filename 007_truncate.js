function truncateString(str, num) {
    if(str.length > num){
     str = str.substr(0, num) + "...";
    }

    return str;
}

const str = 'A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket'
let result = truncateString(str, str.length);
console.log(result);
