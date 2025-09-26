<?php
$bookno = $_POST['bookno'];
$title = $_POST['title'];
$author = $_POST['author'];
$price = $_POST['price'];

$conn = new mysqli("localhost", "root", "", "Library"); // case-sensitive DB name

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO books (bookno, title, author, price) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("issi", $bookno, $title, $author, $price);

if ($stmt->execute()) {
    echo "<p>Record Saved.</p>";
    echo "<a href='addbook.html'>Go to Home Page</a>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
