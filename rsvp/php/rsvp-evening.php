<?php  

// get the posted data from the html
$name = $_POST["rsvp-name"];
$email_address = $_POST["rsvp-email"];
$answer = $_POST["rsvp-answer"];
$message = $_POST["rsvp-message"];

// check that a name was entered  
if (empty ($name))
    $error = "Please enter your name, so that we know who to expect!";
elseif (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $email_address) OR empty ($email_address))
    $error = "Please enter a valid email address, so we know how to get in touch with you!";
elseif (empty ($answer))
    $error = "Please choose if you are attending or not attending. Really, you should come!";
elseif (empty ($message))
    $message = "No message provided.";

if (isset($error)) {
    header("Location: ../../rsvp.html?s=".$error);
    exit;
}

// sets cookie for six months
$cookie_stamp = 15770000 + time();
setcookie("evening",$answer,$cookie_stamp,"/");

// writes record to file on server
$escape_message = urlencode($message);
file_put_contents("../db/evening.record","$name\t$email_address\t$answer\t$escape_message\n",FILE_APPEND);

// write the email
$answer_upper = strtoupper($answer);
$subject = "$name - Wedding RSVP - $answer_upper";
$email = "Hi James and Laura Williams (pending),\n\n";
$email .= "My answer is $answer!\n\n";
$email .= "$message\n\n";
$email .= "Regards,\n$name\n\n";
$headers = "from: $email_address\r\n";
      
// send the email (DOMAIN CANNOT SEND EMAIL TO DOMAIN ADDRESS)
mail ("jlwilliams.pending@gmail.com",$subject,$email,$headers);

// write confirmation email
$subject_conf = "Confirmation - Wedding RSVP";
$email_conf = "BAD!";
if ($answer == "yes")
    $email_conf = "Hi $name,\n\nThank you for your RSVP. We look forward to seeing you at the evening reception!\n\nRegards,\nJames and Laura Williams (pending)";
else
    $email_conf = "Hi $name,\n\nThank you for your RSVP. We would have loved you to be there, but we understand!\n\nRegards,\nJames and Laura Williams (pending)";
$headers_conf = "From: email@jlwilliamspending.co.nz\r\n";

// send confirmation email
mail ($email_address,$subject_conf,$email_conf,$headers_conf);

// send the user back to the form  
header("Location: ../../rsvp.html");
exit;  

?>