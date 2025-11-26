function dateFinder(){
  let date = Number(document.getElementById('date').value);
  
  let result = "";
  if(date < 1 || date > 31){
    document.getElementById('result').innerHTML = "Invalid Date!";
    return;
  }
  
  let firstDay = 3;
  
  let dayNum = ((firstDay + (date -1)) % 7);
  
  let dayName = "";
  switch(dayNum){
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
    break;
    case 4:
      dayName = "Thursday";
    break;
    case 5:
      dayName = "Friday";
    break;
    case 6:
      dayName = "Saturday";
    break;
  }
  
  // Show Day 
  document.getElementById('result').innerHTML = "January " + date + ", 2025 is a " + dayName;
}