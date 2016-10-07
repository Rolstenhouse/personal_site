document.getElementById("anagram-check").addEventListener("click", function () {
  //Clear dependent html elements
  document.getElementById("error").innerHTML = "";
  document.getElementById("error").className = "";
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("feedback").className = "";

  var anagram1 = document.getElementById("anagram1").value.trim();
  var anagram2 = document.getElementById("anagram2").value.trim();
  if(anagram1.length == 0 || anagram2.length == 0){
    document.getElementById("error").innerHTML = "Please enter valid input";
    document.getElementById("error").className = "alert alert-danger";
    return;
  }
  if(checkAnagrams(anagram1, anagram2)){
    document.getElementById("feedback").innerHTML = "<b>"+anagram1 + "</b> and <b>"+anagram2+"</b> are anagrams";
    document.getElementById("feedback").className = "alert alert-success";
  }
  else{
    document.getElementById("feedback").innerHTML = "<b>"+anagram1 + "</b> and <b>"+anagram2+"</b> are not anagrams";
    document.getElementById("feedback").className = "alert alert-danger"
  }
});
//Only triggering when submit button is pressed
var checkAnagrams = function(a, b){
  if(a.length != b.length) return false;
  var letters = [];

  //build associative array
  for(var i=0; i<a.length; i++){
    var character = a.charAt(i)
    if(letters[character]){
      letters[character] = letters[character]+1;
    }
    else{
      letters[character]=1;
    }
  }

  //iterate over the associative array and check to see that all characters are present
  for(var i=0; i<b.length; i++){
    var character = b.charAt(i);
    if(letters[character] && letters[character]!=0){
      letters[character] = letters[character]-1;
    }
    else return false;
  }
  return true;
}
