const button = document.querySelector('.button');


button.addEventListener('click', () => {
   function loadHtmlFile() {
    fetch('letter.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html
        })
        .catch(error => console.error("error fetching HTML file:", error))
   }

   loadHtmlFile()

})
