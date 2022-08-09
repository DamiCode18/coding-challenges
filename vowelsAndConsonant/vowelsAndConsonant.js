function vowelsAndConsonants(s) {
    let v = [];
    let c = [];
    for(let i=0; i<s.length; i++){
        s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ? v.push(s[i]) : c.push(s[i]); 
    }
  for(let j=0; j<v.length; j++){
      console.log(v[j])
  }
   for(let q=0; q<c.length; q++){
      console.log(c[q])
  }
    
}