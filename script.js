<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation Example</title>
  <style>
    .highlight {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div id="content">
    <p id="paragraph">This is a paragraph.</p>
    <button id="changeTextButton">Change Text</button>
    <button id="toggleClassButton">Toggle Class</button>
  </div>
  <script>
    // Mengakses elemen
    let paragraph = document.getElementById("paragraph");
    let changeTextButton = document.getElementById("changeTextButton");
    let toggleClassButton = document.getElementById("toggleClassButton");

    // Menangani peristiwa klik untuk mengubah teks
    changeTextButton.addEventListener("click", function() {
      paragraph.textContent = "The text has been changed!";
    });

    // Menangani peristiwa klik untuk mengganti kelas
    toggleClassButton.addEventListener("click", function() {
      paragraph.classList.toggle("highlight");
    });
  </script>
</body>
</html>
