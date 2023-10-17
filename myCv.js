$(document).ready(function ($) {
    $(document).on('click', '.btn_print', function (event) {
        event.preventDefault();

        // Get the HTML element you want to convert to PDF
        let element = document.getElementById('cv-container');

        // Define PDF options
        let opt = {
            margin: 0,
            filename: 'viszkocsilova-cv.pdf', // Specify the PDF file name
            image: {type: 'jpeg', quality: 1}, // Image options
            html2canvas: {scale: 3}, // Scale for better resolution
            jsPDF: {unit: 'mm', format: 'A4', orientation: 'portrait'} // A4 page format
        };

        // Use html2pdf to convert the content to PDF
        html2pdf().from(element).set(opt).save();
    });
});