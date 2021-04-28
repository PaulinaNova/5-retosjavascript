function FindIntersection(strArr) {
    var arr0 = strArr[0].split(', ');
    var arr1 = strArr[1].split(', ');
    strArr = [];
    
    for (var i = 0; i < arr0.length; i++) {
      if (arr1.indexOf(arr0[i]) != -1) {
        strArr.push(arr0[i]);
      }
    }
    
    if (strArr.length === 0) {
      return 'false';
    }
    return strArr.join(',');
  }
  
  // keep this function call here
  console.log(FindIntersection(readline()));