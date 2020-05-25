const dsCount = (...numbers) => {
  let aCountArr = [...numbers].map((i) => {
    return i.match(/a/g).length;
  });
  console.log(aCountArr);
};

dsCount("a__a__g__4");

//------------------------------------------------------

function checkSyntax(expr) {
  let holder = [];
  let openBrackets = ["(", "{", "["];
  let closedBrackets = [")", "}", "]"];
  for (let letter of expr) {
    if (openBrackets.includes(letter)) {
      holder.push(letter);
    } else if (closedBrackets.includes(letter)) {
      let openPair = openBrackets[closedBrackets.indexOf(letter)];
      if (holder[holder.length - 1] === openPair) {
        holder.splice(-1, 1);
      } else {
        holder.push(letter);
        break;
      }
    }
  }
  return holder.length === 0;
}
checkSyntax("[[{asd}]]");
