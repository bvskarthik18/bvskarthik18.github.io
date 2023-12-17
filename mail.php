<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "your_email@example.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $txt = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    mail($to, $subject, $txt, $headers);
    header("Location: thank_you.html"); // Redirect to a thank you page
    exit();
}
?>
