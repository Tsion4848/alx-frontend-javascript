export default function hasValuesFromArray(set, arr) {
  for (let array of arr) {
    if set.has(array){
      return true;
    else{
      return false;
