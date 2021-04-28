function MinWindowSubstring(strArr) {
    let target = strArr[1]
    let array = strArr[0]
    let smallestLength = Infinity
    let smallest = ''
    for (let i = 0; i < array.length; i++) {
      for (let j = i + target.length; i + j <= smallestLength || j <= array.length; j++) {
        let testArray = array.slice(i, j)
        if (check(testArray) && testArray.length < smallestLength) {
          smallestLength = testArray.length
          smallest = testArray.slice()
        }
      }
    }
  
    function check(string) {
      let newString = string.slice()
      let counter = 0
      for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < newString.length; j++) {
          if (newString[j] === target[i]) {
            counter++
            newString = newString.split('')
            newString.splice(j, 1)
            newString = newString.join('')
            j = newString.length
          }
        }
      }
      if (counter === target.length) return true
      return false
    }
  
    return smallest;
  }
  
  // keep this function call here 
  console.log(MinWindowSubstring(readline()));