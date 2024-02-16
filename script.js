

document.getElementById('cv').addEventListener('click', function () {
    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the href attribute to the GitHub raw URL of your CV file
    downloadLink.href = 'https://docs.google.com/document/d/1bHI8hv25ICwtKolb-pmuwMobOtAWPExj/edit?usp=sharing&ouid=108838544031018503616&rtpof=true&sd=true';

    // Set the download attribute with the desired file name
    downloadLink.download = 'Nikola_Gjurovski_CV.docx';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Programmatically trigger a click event on the link
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
});