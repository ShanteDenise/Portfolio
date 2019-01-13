<?php
// Only process POST requests.

if( $_SERVER['REQUEST_METHOD'] !== "POST") {
    header("HTTP/1.0 403 Forbidden");
    echo "There was a problem with your submission, please try again.";
    exit;
}

$name     = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email    = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$comment  = filter_input(INPUT_POST, 'comment', FILTER_SANITIZE_FULL_SPECIAL_CHARS);


// Check that data was sent to the mailer.
if ( empty($name) || empty($comment) || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    // Set a 400 (bad request) response code and exit.
    header("HTTP/1.0 400 Bad Request");
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
}

// Set the recipient email address.
// FIXME: Update this to your desired email address.
$recipient = "shante.austin19@gmail.com";

// Set the email subject.
$subject = "New contact from $name";

// Build the email content.
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Comment:\n$comment\n";

// Build the email headers.
$email_headers = "From: $name <$email>";

// Send the email.
if (mail($recipient, $subject, $email_content, $email_headers)) {
    // Set a 200 (okay) response code.
    header('HTTP/1.0 200 OK');
    echo "Thank You! Your message has been sent.";
} else {
    // Set a 500 (internal server error) response code.
    header('HTTP/1.0 500 Internal Server Error');
    echo "Oops! Something went wrong and we couldn't send your message.";
}
