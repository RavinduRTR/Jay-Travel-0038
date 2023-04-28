function bigImg(x) {
    x.style.width = "40%";
  }
  
function normalImg(x) {
    x.style.width = "20%";
  }

  function sbigImg(x) {
    x.style.width = "55%";
  }
  
function snormalImg(x) {
    x.style.width = "50%";
  }





function msgsent() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;

  if (name === "" || email === "" || msg === "") 
  {
    alert("Please fill the form");
    return;
  }

 else {
  alert("Message sent");
  }
}