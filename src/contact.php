<?php

    $to = "treyntiurner@gmail.com";
    $subject = "test1";
    $message = "test";
    $message = wordwrap($message, 70);


    mail($to, $subject, $message);

?>