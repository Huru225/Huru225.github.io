fetch('nav.txt')
    .then(response => response.text())
    .then(navbarContent => {
        const navbarElement = document.getElementById('navbar');
            navbarElement.innerHTML = navbarContent;
    })
    .catch(error => {
        console.error("无法读取导航栏内容:", error);
    });