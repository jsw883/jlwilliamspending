<?php  

// get the posted data from the html
$name = $_POST["rsvp-name"];
$number_attending = $_POST["rsvp-number-attending"];

// check that a name was entered  
if (empty ($name))
    $error = "You must enter your name.";
elseif (empty ($number_attending))
    $error = "You must enter a number of guests.";

if (isset($error)) {
    header("Location: ../../rsvp.html?s=".$error);
    exit;
}

// sets cookie for six months
$cookie_stamp = 15770000 + time();
setcookie("wedding","done",$cookie_stamp,"/");

// writes record to file on server
file_put_contents("../db/wedding.record","$name\t$number_attending\n",FILE_APPEND);

// send the user back to the form  
header("Location: ../../rsvp.html");
exit;  

?>