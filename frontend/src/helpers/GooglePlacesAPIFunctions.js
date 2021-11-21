export function getPrice(x) {
  const pricePoint = x.sort(function(a, b){return a-b});
  //console.log("pricePoint:", pricePoint);
  const priceRange = [];
  priceRange.push(pricePoint[0]);
  priceRange.push(pricePoint[pricePoint.length-1]);
  //console.log("priceRange:",priceRange);
  return priceRange;
}

export function getQuery(answers_answerOne, answers_answerTwo) {
  //Need to concatenate the array in answers_answerTwo to a single string
  const stringAnsTwo = answers_answerTwo.join(" "); //join into one string separated by one space " "
  const query = `${answers_answerOne} ${stringAnsTwo}`;
  return query;
}
