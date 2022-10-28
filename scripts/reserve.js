"use strict";


window.onload = function () {
  const btn = document.getElementById("estimateBtn");
  btn.onclick = totalCost;
  let targetDiv = document.getElementById("totalBox");
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  }
};

function totalCost() {

  let numbers = document.getElementById("numberOfNights");
  let nights = numbers.value;

  

//  let adultOccupancy = document.getElementById("adult");
//   let adult =adultOccupancy.value;
//   let childOccupancy = document.getElementById("children");
//   let children = childOccupancy.value;

//   let totalOccupancy = adult + children;

    const months = ["January", "February", "March", "April",
                "May", "June", "July", "August", "September",
                "October", "November", "December"];
    // let d = new Date();
    // let monthName = months[d.getMonth()];


  let king = document.getElementById("king");
  let queen = document.getElementById("queen");
  let suite = document.getElementById("2bd");
  
  let charge = 0;
  if (king.checked ) {
    charge = 150;
  }
  else if (queen.checked ) {
    charge = 150;
  }
  else if (suite.checked ) {
    charge = 210;
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
  tot.innerHTML = "The total cost of the stay : $" + allTotal.toFixed(2);  
  

  //hide/show total
  let targetDiv = document.getElementById("totalBox");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  } 
  


  return totalCost;

}



