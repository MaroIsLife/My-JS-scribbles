const reverseString = (string) => {
    let newArray = '';
    for (let i = string.length - 1; i >= 0; i--)
    {
      newArray = newArray + string[i];
    }
    return newArray;
  }

  console.log(reverseString('Hello Maro'));
