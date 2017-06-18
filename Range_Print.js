

function rangePrint(Start, End, Skip){
  for(var i = Start; i < End; i+=Skip){

    console.log(i);
    }
}

rangePrint(2,10,2);


function greetSomeone(person)
{
  if (person == "Martin") {
    console.log("Yo dawg, howz it goin?");
  }
  else {
    console.log("Greetings Earthling!");
  }
}

greetSomeone("Martin");
