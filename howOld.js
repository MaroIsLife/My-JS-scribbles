const howOld = (age,year) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let yearBorn = currentYear - age;
  let youWillBe = year - currentYear + age;
  let youWere = year - yearBorn;

console.log(yearBorn);

  if (year > currentYear)
    return `You will be ${youWillBe} in the year ${year}`;
  else if (yearBorn > year)
    return `The year ${year} was ${yearBorn - year} years before you were born`;
  else if (currentYear > year)
    return `You were ${youWere} in the year ${year}`

}
