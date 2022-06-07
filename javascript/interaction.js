// mobiscroll.card('.demo-card li', {
//     theme: 'ios',
//     themeVariant: 'light'
// });

// mobiscroll.scrollview('.demo-card', {
//     theme: 'ios',
//     themeVariant: 'light',
//     layout: 'fixed',
//     itemWidth: 134,
//     snap: false
// });

var cards = document.getElementsByClassName('card');
for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.addEventListener('click', function () {
        window.location.href = "./detail_page.html";
    });

}