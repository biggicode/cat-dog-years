//Cat and dog years Algorithm

export const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = +humanYears * 4;
  let dogYears = +humanYears * 5;
  
  if ( +humanYears === 1) {
    catYears = catYears + 11;
    dogYears = dogYears + 10;
  } else {
    catYears = catYears + 16;
    dogYears = dogYears + 14;
  }

  return [humanYears, catYears, dogYears];
}
