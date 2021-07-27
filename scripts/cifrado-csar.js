function rot13(str) {
  const firstHalfAlphabet  = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  const secondHalfAlphabet = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let strSplited = str.split('');
  let idx = 0;
  let regex = /[^A-Z]/;

  for(let i = 0; i < strSplited.length; i++){
    if(regex.test(strSplited[i])){
      strSplited[i] = strSplited[i];
    }
    else if(firstHalfAlphabet.includes(strSplited[i])){
      idx = firstHalfAlphabet.indexOf(strSplited[i]);
      strSplited[i] = secondHalfAlphabet[idx]
    }else{
      idx = secondHalfAlphabet.indexOf(strSplited[i]);
      strSplited[i] = firstHalfAlphabet[idx];
    }
  }

  return strSplited.join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log("Hello World");
