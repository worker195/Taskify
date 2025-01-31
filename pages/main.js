function switchLanguage(lang) {
    const enElements = document.querySelectorAll('.en');
    const arElements = document.querySelectorAll('.ar');

    if (lang === 'ar') {
        enElements.forEach(el => el.style.display = 'none');
        arElements.forEach(el => el.style.display = 'block');
    } else {
        enElements.forEach(el => el.style.display = 'block');
        arElements.forEach(el => el.style.display = 'none');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file");
    const addMoreButton = document.getElementById("add-more-files");
    const fileUploadSection = document.getElementById("file-upload-section");

    fileInput.addEventListener("change", function () {
        if (this.files.length > 0) {
            addMoreButton.style.display = "inline-block";
        }
    });

    addMoreButton.addEventListener("click", function () {
        const allInputs = fileUploadSection.querySelectorAll('input[type="file"]');
        let allFilled = true;

        allInputs.forEach(input => {
            if (!input.files || input.files.length === 0) {
                allFilled = false;
            }
        });

        if (allFilled) {
            const newFileInput = document.createElement("input");
            newFileInput.type = "file";
            newFileInput.name = "file[]";
            newFileInput.required = true;

            newFileInput.addEventListener("change", function () {
                if (this.files.length > 0) {
                    addMoreButton.style.display = "inline-block";
                }
            });

            const lineBreak = document.createElement("br");
            const lineBreak2 = document.createElement("br");

            fileUploadSection.appendChild(newFileInput);
            fileUploadSection.appendChild(lineBreak);
            fileUploadSection.appendChild(lineBreak2);
        } else {
            alert("Please fill all file inputs before adding more.");
        }
    });
});