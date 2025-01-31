<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $apiKey = "gtgo zpdc mmzd jnoq";  

    
    require 'vendor/autoload.php'; 

    
    $teamJoin = $_POST['teamJoin'];
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $skills = isset($_POST['skills']) ? $_POST['skills'] : '';
    $availability = isset($_POST['availability']) ? $_POST['availability'] : '';
    $portfolio = isset($_POST['portfolio']) ? $_POST['portfolio'] : '';

    
    $emailContent = "
        Team Join Status: $teamJoin\n\n
        Full Name: $name\n
        Skills/Experience: $skills\n
        Availability: $availability\n
        Portfolio: $portfolio\n
    ";

    
    $email = new \SendGrid\Mail\Mail(); 
    $email->setFrom("s12116027@stu.najah.edu", "Your Name");
    $email->setSubject("New Team Join Application");
    $email->addTo("s12116027@stu.najah.edu", "Your Name");  
    $email->addContent("text/plain", $emailContent);

    
    $sendgrid = new \SendGrid($apiKey);
    try {
        $response = $sendgrid->send($email);
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Error sending email: " . $e->getMessage();
    }
}
header("../index.html");
?>
