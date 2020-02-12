
module.exports = (selectedDay) => {
    if(selectedDay === 0){
        selectedDay = 'Sunday'; 
        return selectedDay;
    }
    else if(selectedDay === 1){
      selectedDay = 'Monday';
      return selectedDay;
    }
    else if(selectedDay === 2){
      selectedDay = 'Tuesday';
      return selectedDay;
    }
    else if(selectedDay === 3){
        selectedDay = 'Wednesday';
        return selectedDay;
    }
    else if(selectedDay === 4){
        selectedDay = 'Thursday';
        return selectedDay;
    }
    else if(selectedDay === 5){
        selectedDay = 'Friday';
        return selectedDay;
    }
    else if(selectedDay === 6){
        selectedDay = 'Saturday';
        return selectedDay;
    }
}
