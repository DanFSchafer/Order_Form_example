$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fNameInput = $("input#fName").val();
    var lNameInput = $("input#lName").val();
    var address1Input= $("input#address1").val();
    var address2Input = $("input#address2").val();
    var productInput = $("input#product").val();

    $(".fName").text(fNameInput);
    $(".lName").text(lNameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".product").text(productInput);

    $("#story").show();

    event.preventDefault();
    alert("Thank you for your order " + fNameInput + " " + lNameInput "!")
  });
});
