// Determine if string has all unique characters

function isUnique(str) {
  if(str.length > 256) return false; // Assuming ASCII range
  let charRepresentation = []
  for(let i=0; i<str.length; i++) {
    let value = str.charAt(i)
    if(charRepresentation[value]) {
      return false;
    }
    charRepresentation[value] = true;
  }
  return true;
}