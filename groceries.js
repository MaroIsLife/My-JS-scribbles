/*
Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. 
Make sure spaces (' ') are inserted where they are appropriate.
*/

const groceries = (array) => {
    let newString = '';
  
    for(let i in array)
    {
        newString = newString + array[i].item;
        if (i == array.length - 2)
        {
            newString = newString + ' and ';
        }
        else if (i == array.length - 1)
        {
            ;
        }
        else if (array.length > 1)
        newString = newString + ', ';      
    }
    return newString;
}
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));

//   console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));

//   console.log(groceries( [{item: 'Cheese Balls'}] ));

//   console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
