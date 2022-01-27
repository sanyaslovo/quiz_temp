import React from 'react';

function Quiz() {

  function quiz(num:number) {
    if (num % 22 == 0) {
      return "candybar";
    } else if (num % 11 == 0) {
      return "bar";
    } else if (num % 2 == 0) {
      return "candy";
    } else {
      return num;
    }
  }

  return (
    <div>
      <p>{quiz(2)}</p>
      <p>{quiz(11)}</p>
      <p>{quiz(22)}</p>
      <p>{quiz(3)}</p>
    </div>
  );
}

export default Quiz;
