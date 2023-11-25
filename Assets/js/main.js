document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var closeBtn = document.getElementById('closeBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    var navLinks = document.getElementById('navLinks')
    var resumeBtn = document.getElementById('resumeBtn')
    var resumeBtnMobile = document.getElementById('resumeBtnMobile')

    toggleBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        toggleBtn.classList.add('hidden');

    });

    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        toggleBtn.classList.toggle('hidden');
    });

    // Hide/show the navigation links and Resume button based on screen size
    window.addEventListener('resize', function () {
        if (window.innerWidth < 1024) {
            navLinks.classList.add('hidden');
            resumeBtn.classList.add('hidden');
            resumeBtnMobile.classList.remove('hidden');
        } else {
            navLinks.classList.remove('hidden');
            resumeBtn.classList.remove('hidden');
            resumeBtnMobile.classList.add('hidden');
        }
    });
    resumeBtn.addEventListener('click', handleResumeButtonClick);
    resumeBtnMobile.addEventListener('click', handleResumeButtonClick);

});
function handleResumeButtonClick() {
    var link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1lZJeN3GZJWFLB7HZQ777llS1DEWHt9FT";
    link.download = "Alex Sung - Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// home button reload
var homeReload = document.getElementById("homeReload");
homeReload.addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
}) ;






