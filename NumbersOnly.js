

var newArr = []
function arrOfNumbers()
{
  var arr = [1, "apple", -3, "orange", 0.5]
  for(var i = 0; i < arr.length; i++)
  {
   if(typeof arr[i] === "number")

  {
   newArr.push (arr[i]);
  }
 }
  console.log(newArr);
}
arrOfNumbers()
