"use strict";


window.onload = function () {
  const btn = document.getElementById("estimateBtn");
  btn.onclick = totalCost;

  document.getElementById("totalBox").style.display = "none";

}

function totalCost() {

  document.getElementById("totalBox").style.display = "block";

  let numbers = document.getElementById("numberOfNights");
  let nights = numbers.value;

  
//max occupancy
 let adultOccupancy = document.getElementById("adults");
  let adult = Number(adultOccupancy.value);
  let childOccupancy = document.getElementById("children");
  let children = Number(childOccupancy.value);
  let totalOccupancy = adult + children;



  

  let king = document.getElementById("king");
  let queen = document.getElementById("queen");
  let suite = document.getElementById("twoBedroom");
  let months = new Date(document.getElementById("pickUpDate").value).getMonth();
  let timeOfYear = months == 5 || months == 6 || months == 7 ;
  

  
  let charge = 0;

  if (king.checked ) {

      if(timeOfYear && totalOccupancy <= 5){
          charge = 250;
      }
      else{
          charge = 150
      }

  }

  else if (queen.checked) {

     if (timeOfYear && totalOccupancy <= 2){
      charge = 250;
    }
   else {
      charge = 150;
    }
}
  else if (suite.checked){

    
    if(timeOfYear && totalOccupancy <= 6 ){
    charge = 350;
    }
    else{
    charge = 210;
    }
  }
  


   
//original room cost
  let total = nights * charge;
  let roomCost = document.getElementById("room");
  roomCost.innerHTML= "The original room cost : $" + total;

//dicount cost
  let none = document.getElementById("none");
  let senior = document.getElementById("senior");
  let military = document.getElementById("military");

  let discount = 0;
  if (none.checked ) {
      discount = 0;
  }
    else if (senior.checked ) {
      discount = .10 * total;
  }
    else if (military.checked ) {
     discount = .20 * total;
  }

  let finalDiscount = document.getElementById("dis");
  finalDiscount.innerHTML = "The discount : $" + discount;


  //discounted room cost

  let discountedRoomCost = total - discount;
  let disRoom = document.getElementById("disRoom");
  disRoom.innerHTML = "The discounted room cost : $" + discountedRoomCost.toFixed(2);

  let tax = .12 * discountedRoomCost;
  let tax1 = document.getElementById("tax");
  tax1.innerHTML = "The tax : $" + tax.toFixed(2);


  //total cost

  let allTotal = discountedRoomCost + tax;
  let tot = document.getElementById("total");
  tot.innerHTML = "The total cost of the stay : $" + allTotal.toFixed (2) ;
  




  return totalCost;

}
