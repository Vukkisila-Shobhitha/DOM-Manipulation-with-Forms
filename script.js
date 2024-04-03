var Submit = document.getElementById("submit");

Submit.addEventListener("click", function (event) {
  //To avoid default form submission
  event.preventDefault();

  //get all elements

  var Fname = document.getElementById("first-name");
  var Lname = document.getElementById("last-name");
  var Adrs = document.getElementById("address");
  var Pin = document.getElementById("pincode");
  //To store the selected gender value
  var SelectedGender = "";
  //To select Gender
  var Gendervalue = document.querySelectorAll(`Input[name="gender"]`);

  Gendervalue.forEach(function (radios) {
    if (radios.checked) {
      SelectedGender = radios.value;
    }
  });

  var Foo = document.getElementById("inputfood");
  var State = document.getElementById("inputstate");
  var County = document.getElementById("inputCountry");

  var Tablebody = document.getElementById("tablebody");

  //Create a new Table
  var NewTablerow = document.createElement("tr");
  NewTablerow.innerHTML = 
`<td>${Fname.value}</td>
<td>${Lname.value}</td>
<td>${SelectedGender}</td>
<td>${Adrs.value}</td>
<td>${Pin.value}</td>
<td>${County.value}</td>
<td>${State.value}</td>
<td>${Foo.value}</td>

`;
  Tablebody.append(NewTablerow);

  ///reset the form data
  document.getElementById("form").reset();
});