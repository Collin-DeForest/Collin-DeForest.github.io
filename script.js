function validateForm() {
    let x = document.forms["myForm"]["myName"].value;
    if (x == "") {
      alert("Name section must be filled out");
      return false;
    }
    let x1 = document.forms["myForm"]["myEmail"].value;
    if (x1 == "") {
      alert("Email section must be filled out");
      return false;
    }
    let x2 = document.forms["myForm"]["myStart"].value;
    if (x2 == "") {
      alert("Start date section must be filled out");
      return false;
    }
    let x3 = document.forms["myForm"]["myMessage"].value;
    if (x3 == "") {
      alert("Message section must be filled out");
      return false;
    }
  } 