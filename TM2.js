const viewButton = document.getElementById('viewButton');
const alertMessage = document.getElementById('alertMessage');
const alertMessage2 = document.getElementById('alertMessage2');

viewButton.addEventListener('click', function() {
    alertMessage.style.display = 'block';
    setTimeout(function() {
    alertMessage.style.display = 'none';
    }, 3000);
});
document.querySelector('.info-icon').addEventListener('click', function() {
    alertMessage2.style.display = 'block';
    setTimeout(function() {
    alertMessage2.style.display = 'none';
    }, 3000);
});
document.querySelector('.details-link').addEventListener('click', function(e) {
    e.preventDefault();
});