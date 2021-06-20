<?php

    $_POST = json_decode(file_get_contents('php://input'),true);
    if(isset($_POST) && !empty($_POST) ){
        $username= $_POST['username'];
        $password= $_POST['password'];

         if($username == "admin" && $password == '123' ){
            ?>
        {
            "success": true,
            "secret": "This is a secret only shown to admin"
        }
            <?php
        } else {
            ?>
        {
            "success" : false,
            "message" : "Invalid Credentials"  F 
        }
            <?php
        }

    }else{
        var_dump($_POST)
        ?>
        {
            "success" : false,
            "message" : "Only POST request is acceptable"
        }

        <?php
    }

?>