
function incrementScore1(){


   var element = document.getElementById("teamScore1");
   var score1 = element.innerHTML;

   ++score1;

   console.log(score1);

   document.getElementById("teamScore1").innerHTML = score1;
}


function decrementScore1(){

  var element = document.getElementById("teamScore1");
  var score1 = element.innerHTML;

  if (score1==0){
    document.getElementById("teamScore1").innerHTML = 0;
  }
  else{
    --score1
    document.getElementById("teamScore1").innerHTML = score1;
  }
}

function incrementScore2(){


   var element = document.getElementById("teamScore2");
   var score1 = element.innerHTML;

   ++score1;

   console.log(score1);

   document.getElementById("teamScore2").innerHTML = score1;
}


function decrementScore2(){

  var element = document.getElementById("teamScore2");
  var score1 = element.innerHTML;

  if (score1==0){
    document.getElementById("teamScore2").innerHTML = 0;
  }
  else{
    --score1
    document.getElementById("teamScore2").innerHTML = score1;
  }
}

function resetButton(){

  document.getElementById("teamScore1").innerHTML = 0;
  document.getElementById("teamScore2").innerHTML = 0;
}
