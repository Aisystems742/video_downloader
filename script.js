function downloadMedia() {
    let url = document.getElementById("videoURL").value;
    let format = document.getElementById("format").value;
    let status = document.getElementById("status");

    if (!url) {
        status.innerText = "Please enter a video URL!";
        return;
    }

    status.innerText = "Processing...";

    fetch(https://video-downloader-backend-1-p9hs.onrender.com, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url, format: format })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.download_link;
        } else {
            status.innerText = "Error: " + data.message;
        }
    })
    .catch(error => {
        status.innerText = "Failed to process request.";
    });
}
