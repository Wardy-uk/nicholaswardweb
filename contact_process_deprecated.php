<?php
http_response_code(410);
header('Content-Type: text/plain; charset=UTF-8');
echo "This endpoint is deprecated and no longer accepts submissions.\n";
?>
