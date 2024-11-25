const homeButton = document.getElementById('index-btn');
const activityButton = document.getElementById('activity-btn');
const foodButton = document.getElementById('food-btn');
const serviceButton = document.getElementById('service-btn');
const faqsButton = document.getElementById('faqs-btn');

const navButtons = document.querySelectorAll('.nav-btn');
const currentUrl = window.location.pathname;

homeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});

activityButton.addEventListener('click', function() {
    window.location.href = 'activity.html';
});

foodButton.addEventListener('click', function() {
    window.location.href = 'food.html';
});

serviceButton.addEventListener('click', function() {
    window.location.href = 'service.html';
});

faqsButton.addEventListener('click', function() {
    window.location.href = 'faqs.html';
});

navButtons.forEach(btn => {
    const pageName = btn.id.replace('-btn', '');
    if(currentUrl.includes(pageName)) {
        btn.classList.add('active');
    }
});

document.getElementById("globe").onclick = function() {
    alert("Once implemented, clicking this would provide language options.");
};

document.getElementById("search").onclick = function() {
    alert("Once implemented, clicking this would create a text box for site-wide search functionality.");
};

document.querySelectorAll(".news-header").forEach(function(button) {
    button.onclick = function() {
        alert("Once implemented, clicking this would redirect to the relevant outside web page.");
    };
});

document.querySelectorAll(".image-item").forEach(function(button) {
    button.onclick = function() {
        alert("Once implemented, clicking this would redirect to the relevant outside web page.");
    }
});
