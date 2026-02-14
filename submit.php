<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Honeypot field: only process when empty.
	if (isset($_POST['url']) && $_POST['url'] === '') {
		$name = isset($_POST['name']) ? trim($_POST['name']) : '';
		$email = isset($_POST['email']) ? trim($_POST['email']) : '';
		$topic = isset($_POST['topic']) ? trim($_POST['topic']) : '';
		$comments = isset($_POST['comments']) ? trim($_POST['comments']) : '';

		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
			$safeTopic = htmlspecialchars($topic, ENT_QUOTES, 'UTF-8');
			$safeComments = htmlspecialchars($comments, ENT_QUOTES, 'UTF-8');
			$message = "Name: {$safeName}\nEmail: {$email}\nSubject: {$safeTopic}\n\nMessage:\n{$safeComments}";
			$headers = "Reply-To: {$email}\r\n";
			mail('ward.nickj@gmail.com', 'Contact Form: ' . $safeTopic, $message, $headers);
		}
	}
}

?>
<!DOCTYPE HTML>
<html>
<head>

<title>Thanks!</title>

</head>
<body>

<h1>Thanks</h1>
<p>We'll get back to you as soon as possible.</p>

</body>
</html>
