<?php
// Set response type to JSON for our JavaScript frontend
header('Content-Type: application/json');

// Define recipient email (Where you want to receive the messages)
$recipient_email = "contact@myscooty.ng";
$subject = "New Contact Form Submission - Scooty XP Website";

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and validate inputs
    // Using filter_var to prevent malicious script injections
    $name = filter_var(trim($_POST["Name"]), FILTER_SANITIZE_STRING);
    $phone = filter_var(trim($_POST["Phone"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["Email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["Message"]), FILTER_SANITIZE_STRING);

    // Check required fields are not empty
    if (empty($name) || empty($phone) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please fill out all fields correctly."]);
        exit;
    }

    // Build the email content
    $email_content = "You have received a new message from the Scooty XP website contact form.\n\n";
    $email_content .= "Full Name: $name\n";
    $email_content .= "Email Address: $email\n";
    $email_content .= "Phone Number: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Set email headers to easily reply directly to the customer
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email using cPanel's native mail function
    if (mail($recipient_email, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to send the message. Please ensure mail services are configured properly on your cPanel."]);
    }
    
} else {
    // Block non-POST requests
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>