function addUpTo(n){
    return n * (n+1)/2
}
function printAllPairsOfN(n){
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            console.log(i,j)
        }
    }
}

function sumArray(n){
    let total = 0;
    for(let i=0; i<n.length; i++){
        total += n[i];
    }
    return total;
}

function doubleArrVal(n){
    return n.map(x=>x*2);
}
doubleArrVal([1,2,3,4,5,6])


function charCount(str){
    str = str.toLowerCase();
    // initialize and empty object
    const count = {};
    //loop through the string
    for(let i=0; i<str.length; i++){
    var singleChar = str[i];
    if(/[a-z0-9]/.test(str)) {
        count[singleChar] > 0 ? count[singleChar]++ : count[singleChar] = 1;
    }
    }
    return count;
}
charCount("Aaaabbbcccaasdcced");

//note:
//adding or removing element from the beginning of a non empty array is complicated because it involves reindexing
//that is why shift and unshift is O(n) and push and pop is O(1)

function sameArr(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    } 
      for(let i=0; i<arr1.length; i++){
      correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1){
          return false;
      }
          arr2.splice(correctIndex, 1)
      }
      return true
  
  }
  same([1,2,1], [1,4,1])