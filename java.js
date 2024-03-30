  function changeBackground(){
  let color = document.getElementById('color_value').value;
  document.getElementById('header_color').style.backgroundColor = color;
}

  function rating(){
    let i =1;
    let text = "";
    let number = prompt("What star rating would you like to give, 1-5?");
      while (!(number>=1 && number <=5)) {
        number = prompt("Invalid! What star rating would you like to give,1-5?")
      }
      document.getElementById("rating").innerHTML="You rated the page with "+number+" star(s).Thank you!";

      while (i<=number) {
        text += "&#127799";
        i++;
      }
      document.getElementById("rating_notes").innerHTML=text;
    }