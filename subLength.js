/*
Write a function subLength() that takes 2 parameters, string and a single character. 
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 
If there are less than or more than 2 occurrences of the character the function should return 0.
*/


const subLength = (string,single) => {
    let a = 0;

    const indexs = {
        numberOfC: 0,
        firstC: 0,
        foundC: 0,
        count: 0,  
    };

    if (typeof string != 'string' || typeof single != 'string' || single.length != 1)
    {
        console.log('Error');
        return 0
    }

    for (let i in string)
    {
        console.log(string[i],indexs.numberOfC,single);
        if (string[i] === single && indexs.foundC === 0)
        {
            indexs.firstC = i;
            console.log(indexs.firstC);
            indexs.foundC = 1;
        }

      if (string[i] === single)
        indexs.numberOfC++;
    }
  
    if (indexs.numberOfC < 2 || indexs.numberOfC > 2)
    {
        console.log(`More or less than 2 strings: '${indexs.numberOfC}'`);
      return 0
    }
    else
        console.log(`Found ${indexs.numberOfC} ${single}'s`);

    let i = 0;
    while (string[indexs.firstC] != string.length)
    {
        indexs.firstC++;
        if (string[indexs.firstC] === single)
        {
            return indexs.count + 2;
        }
        else
        {
            indexs.count++;
        }

    }
  }


  console.log(subLength('Saturday', 'a')); //Should Return 6



/*
  const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        charCount++;
        if (charCount > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };*/
