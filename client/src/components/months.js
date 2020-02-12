
module.exports = (selectedMonth) => {
    if(selectedMonth === 0){
        selectedMonth = 'Jan'; 
        return selectedMonth;
    }
    else if(selectedMonth === 1){
      selectedMonth = 'Feb';
      return selectedMonth;
    }
    else if(selectedMonth === 2){
      selectedMonth = 'March';
      return selectedMonth;
    }
    else if(selectedMonth === 3){
        selectedMonth = 'April';
        return selectedMonth;
    }
    else if(selectedMonth === 4){
        selectedMonth = 'May';
        return selectedMonth;
    }
    else if(selectedMonth === 5){
        selectedMonth = 'June';
        return selectedMonth;
    }
    else if(selectedMonth === 6){
        selectedMonth = 'July';
        return selectedMonth;
    }
    else if(selectedMonth === 7){
        selectedMonth = 'August';
        return selectedMonth;
      }
      else if(selectedMonth === 8){
        selectedMonth = 'Sept';
        return selectedMonth;
      }
      else if(selectedMonth === 9){
          selectedMonth = 'Oct';
          return selectedMonth;
      }
      else if(selectedMonth === 10){
          selectedMonth = 'Nov';
          return selectedMonth;
      }
      else if(selectedMonth === 11){
          selectedMonth = 'Dec';
          return selectedMonth;
      }
}
