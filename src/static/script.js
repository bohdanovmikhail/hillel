function run() {
    const mainA = $('main a');

    mainA.on('click', function (event) {
        event.preventDefault();

        const pathName = this.pathname;
        goToRoute(pathName);
    });

    goToRoute();
}

function goToRoute(routePath) {
    const content = $('#content');

    $.ajax('/get-page', {
        data: { path: routePath }
    })
        .done((response) => {
            content.html(response);
        });
}

window.addEventListener('load', run);
