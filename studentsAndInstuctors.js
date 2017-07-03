//First Part

function students1() {
  var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
    console.log(students[0].first_name,students[0].last_name);
    console.log(students[1].first_name,students[1].last_name);
    console.log(students[2].first_name,students[2].last_name);
    console.log(students[3].first_name,students[3].last_name);

  }

  students1();

// Second Part


   function functionName1() {
        var i, s, x= "";
        var text = "";
        var text2 = "";
     var users = {
      'Students': [
          {first_name: 'Michael', last_name : 'Jordan'},
          {first_name : 'John', last_name : 'Rosales'},
          {first_name : 'Mark', last_name : 'Guillen'},
          {first_name : 'KB', last_name : 'Tonel'}
       ],
      'Instructors': [
          {first_name : 'Michael', last_name : 'Choi'},
          {first_name : 'Martin', last_name : 'Puryear'}
       ]
      }
   for( i in users.Students){
     text+= users.Students[i].first_name + " " + users.Students[i].last_name + " ";
    //  console.log();
  };
    console.log(text);

    for(s in users.Instructors){
        text2+=users.Instructors[s].first_name + " " + users.Instructors[s].last_name + " ";
      };
        console.log(text2);

      // console.log("1", users.Instructors[1].first_name, users.Students[0].last_name );
   }



functionName1();
