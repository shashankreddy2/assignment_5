function hoveron(){
    document.getElementById("image").src="image2.jpg";
}
function hoveroff(){
    document.getElementById("image").src="image2.jpg";
}
function policyHover(){
    document.getElementById("p1").innerHTML="Complete surity of customer data and private information. youtube data privacy is their.";
    document.getElementById("p1").style.fontFamily="Verdana,SANS-SERIF"
    document.getElementById("p1").style.fontSize="20px"
}
function legalHover(){
    document.getElementById("p2").innerHTML="All legal rights are reserved, approved liscense from government.";
    document.getElementById("p2").style.fontFamily="Verdana,SANS-SERIF"
    document.getElementById("p2").style.fontSize="20px"
}
function instructionHover(){
    document.getElementById("p3").innerHTML="Be aware of not letting your password leak, dont login with multiple devices, check your mail regularly for updates.";
    document.getElementById("p3").style.fontFamily="Verdana,SANS-SERIF"
    document.getElementById("p3").style.fontSize="20px"
}
function hoveroff1(){
    document.getElementById("p1").innerHTML="Privacy Policy";
    document.getElementById("p1").style.fontFamily="Copperplate Gothic Light,css"
    document.getElementById("p1").style.fontSize="30px"
}
function hoveroff2()
{
    document.getElementById("p2").innerHTML="Legal";
    document.getElementById("p2").style.fontFamily="Copperplate Gothic Light,css"
    document.getElementById("p2").style.fontSize="30px"
}
function hoveroff3()
{
    document.getElementById("p3").innerHTML="Specific Instruction";
    document.getElementById("p3").style.fontFamily="Copperplate Gothic Light,css"
    document.getElementById("p3").style.fontSize="30px"
}
$(document).ready(function () {
    $("#title").click(function() {
        //alert("Hello World");
        $(this).text("Sorry, I clicked you");
      //$(this).hide();
    });

    $("#email_address1").focus();

    $("#join_list").click(function(){
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var first_name = $("#first_name").val();
        var isValid = true;

        //Validate the first entry
        if(emailAddress1 == "") { 
            $("#email_address1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_address1").next().text("");
        } 

        // validate the second entry
        if (emailAddress2 == "") {  
            $("#email_address2").next().text("This field is required.");
            isValid = false; 
        } else if (emailAddress1 != emailAddress2) { 
            $("#email_address2").next().text("This entry must equal first entry.");
            isValid = false;
        } else {
            $("#email_address2").next().text("");
        }

        // validate the third entry
        if (first_name == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }  

        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit(); 
        }
    });
});