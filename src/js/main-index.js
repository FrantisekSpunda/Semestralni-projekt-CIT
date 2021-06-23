const forDownloadDiv = document.querySelectorAll('.for-download-content div');
const forDownloadImg = document.querySelectorAll('.for-download-content img');
let source;

for(let i = 0; i < 5; i++){
    forDownloadDiv[i].addEventListener('mouseover', () => {
        source = forDownloadImg[i].src;
        forDownloadImg[i].src = './images/download.svg';
    })
    forDownloadDiv[i].addEventListener('mouseout', () => {
            forDownloadImg[i].src = source;
    })

}
