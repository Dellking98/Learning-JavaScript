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

     var users = {
      'Students': [
          {first_name:  'Michael', last_name : 'Jordan'},
          {first_name : 'John', last_name : 'Rosales'},
          {first_name : 'Mark', last_name : 'Guillen'},
          {first_name : 'KB', last_name : 'Tonel'}
       ],
      'Instructors': [
          {first_name : 'Michael', last_name : 'Choi'},
          {first_name : 'Martin', last_name : 'Puryear'}
       ]
      }
   for( var i in users){

    console.log( users[i] );

   }

 }

functionName1();
