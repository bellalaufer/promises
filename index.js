//setInterval

function printNumbers(from, to) {
    let currentNumber = from;
    let timerId = setInterval(() => {
      if (currentNumber >= to) {
        clearInterval(timerId)
      }
        console.log(currentNumber)
        currentNumber++
      
    }, 1000)
    
  }

//setTimeout

function printNumbers(from, to) {
    setTimeout(() => {
      console.log(from);
      if (from < to) {
        printNumbers(from + 1, to)
      }
      }, 1000);
  }