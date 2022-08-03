var presentYear = new Date().getFullYear();
var footer = document.getElementById('footer');
footer.innerHTML = `<p>&copy; 2021-${presentYear}</p>`;