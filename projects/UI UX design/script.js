
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const documentList = document.getElementById('documentList');
            const documentItem = document.createElement('div');
            documentItem.className = 'document-item';
            documentItem.innerHTML = `<strong>Document Name:</strong> ${file.name} <br> <strong>Document Content:</strong> <pre>${e.target.result}</pre>`;
            documentList.appendChild(documentItem);
        };
        reader.readAsText(file);
    }
}
function uploadDocument() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        handleFileSelect({ target: { files: fileInput.files } });
        fileInput.value = '';
    } else {
        alert('Please select a document to upload.');   
 }}
