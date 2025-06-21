const quote_collection = [ "Inspirational quote here. -Someone", "Sentimental quote -Anonymous", "Welcome to class -Kevin" ];

function get_new_quote(){
  // generate a number and look up the value in the array
  // BUT if the value in the array matches the current innerHTML of quote_space
  // THEN we want to repeat generating a new number
  let random_num;

  do{
    random_num = Math.floor( Math.random() * quote_collection.length );
    console.log("Generated random number " + random_num + " which is quote " + quote_collection[random_num]);
  }while( quote_collection[random_num] == document.getElementById("quote_space").innerHTML );
  document.getElementById("quote_space").innerHTML = quote_collection[random_num];
}


window.onload = function() {
  console.log("Here are our quotes:");
  /*
  for(let index = 0; index < quote_collection.length; index++ ){
    console.log("Quote at location " + index + " is: " + quote_collection[index] )
  }
  */
  for(let quote of quote_collection){
    console.log(quote);
  }
  console.log("End of the quotes.");
  get_new_quote();
};

document.getElementById("new_quote").addEventListener("click", get_new_quote);

document.getElementById("add_goal").addEventListener("click", function(){
  const input_length = document.getElementById("goal_entry").value.length;
  if( input_length >= 10 ){
    const goal_block = document.createElement("div");
    goal_block.className="outcome_blocks";
    goal_block.innerHTML = document.getElementById("goal_entry").value;
    document.getElementById("my_goals").appendChild(goal_block);
    document.getElementById("goal_error").innerHTML = "";
    document.getElementById("goal_entry").value = "";
  }
  else if( input_length < 10 && input_length > 0 ){
    document.getElementById("goal_error").innerHTML = "Goals must be at least 10 characters long"
  }
  else{
    document.getElementById("goal_error").innerHTML = "Enter text before adding a goal";
  }
});