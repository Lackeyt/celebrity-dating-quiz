$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    const ageInput = parseInt($("input#age").val());
    const hairInput = $("#hair-color").val();
    const eyeInput = $("#eye-color").val();

    if(ageInput) {
      if(ageInput < 18) {
        alert("You're far to young to be concerned with finding love");
      } else if(ageInput >= 18 && ageInput < 30) {
        if (hairInput === "Blonde") {
          alert("You seem like a Plankton person...Oi lala!");
        } else if(hairInput === "Brunette") {
          alert("I see love between you and Sandy Cheeks!");
        } else if(hairInput === "Other") {
          alert("You and Spongebob are a match made in Bikini Bottom!");
        } 
      } else if(ageInput >= 30) {
        if (hairInput === "Blonde" && eyeInput === "Brown") {
          alert("Seems like Patrick would be a great match for you!");
        } else if(hairInput !== "Blonde" && eyeInput === "Blue") {
          alert("You've got eyes for Mr. Krabs...");
        } else if(hairInput === "Other" && eyeInput === "Other") {
          alert("Squidward and you are a match made in heaven!");
        } else {
          alert("GARRRYYYYYYY");
        }
      }
    } else {
      alert("Please re-enter your age.");
    }
  });
});