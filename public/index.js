const body = $('body')
var backgroundColor = document.querySelector('#background-color #black').getAttribute('value')

$(document).ready(function () {

    // *** keybard event listener
    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape') {
            $('section input').css('border', '1px solid lightblue');
            $('section textarea').css('border', '1px solid lightblue');
            $('header').css('display', 'block');
            $('main').css('min-height', '90vh');
            $('section').css('width', '80%');
            $('aside').css('display', 'flex');
        }
    });

    // *** header ***
    $('header #play').click(() => {
        $('section input').css('border', '0');
        $('section textarea').css('border', '0');
        $('header').css('display', 'none');
        $('main').css('min-height', '100vh');
        $('section').css('width', '100%');
        $('aside').css('display', 'none');
    })

    // *** background color ***
    $('aside #background-color #white').click(() => {
        $('section').css('background-color', 'white')
        $('section input').css('background-color', 'white')
        $('section textarea').css('background-color', 'white')
    })

    $('aside #background-color #black').click(() => {
        $('section').css('background-color', 'black')
        $('section input').css('background-color', 'black')
        $('section textarea').css('background-color', 'black')
    })

    $('aside #background-color #blue').click(() => {
        $('section').css('background-color', 'blue')
        $('section input').css('background-color', 'blue')
        $('section textarea').css('background-color', 'blue')
    })

    $('aside #background-color #green').click(() => {
        $('section').css('background-color', 'green')
        $('section input').css('background-color', 'green')
        $('section textarea').css('background-color', 'green')
    })

    $('aside #background-color #grey').click(() => {
        $('section').css('background-color', 'grey')
        $('section input').css('background-color', 'grey')
        $('section textarea').css('background-color', 'grey')
    })

    $('aside #background-color #orange').click(() => {
        $('section').css('background-color', 'orange')
        $('section input').css('background-color', 'orange')
        $('section textarea').css('background-color', 'orange')
    })

    $('aside #background-color #pink').click(() => {
        $('section').css('background-color', 'pink')
        $('section input').css('background-color', 'pink')
        $('section textarea').css('background-color', 'pink')
    })


    // *** header color ***
    $('aside #header-color #white').click( () => {
        $('section h1 input').css('color', 'white')
    })

    $('aside #header-color #black').click( () => {
        $('section h1 input').css('color', 'black')
    })

    $('aside #header-color #blue').click( () => {
        $('section h1 input').css('color', 'blue')
    })

    $('aside #header-color #green').click( () => {
        $('section h1 input').css('color', 'green')
    })

    $('aside #header-color #grey').click( () => {
        $('section h1 input').css('color', 'grey')
    })

    $('aside #header-color #orange').click( () => {
        $('section h1 input').css('color', 'orange')
    })

    $('aside #header-color #pink').click( () => {
        $('section h1 input').css('color', 'pink')
    })


    // *** subtitle color ***
    $('aside #subtitle-color #white').click( () => {
        $('section h3 input').css('color', 'white')
    })

    $('aside #subtitle-color #black').click( () => {
        $('section h3 input').css('color', 'black')
    })

    $('aside #subtitle-color #blue').click( () => {
        $('section h3 input').css('color', 'blue')
    })

    $('aside #subtitle-color #green').click( () => {
        $('section h3 input').css('color', 'green')
    })

    $('aside #subtitle-color #grey').click( () => {
        $('section h3 input').css('color', 'grey')
    })

    $('aside #subtitle-color #orange').click( () => {
        $('section h3 input').css('color', 'orange')
    })

    $('aside #subtitle-color #pink').click( () => {
        $('section h3 input').css('color', 'pink')
    })


    // *** paragraph title ***
    $('aside #paragraph-color #white').click( () => {
        $('section textarea').css('color', 'white')
    })

    $('aside #paragraph-color #black').click( () => {
        $('section textarea').css('color', 'black')
    })

    $('aside #paragraph-color #blue').click( () => {
        $('section textarea').css('color', 'blue')
    })

    $('aside #paragraph-color #green').click( () => {
        $('section textarea').css('color', 'green')
    })

    $('aside #paragraph-color #grey').click( () => {
        $('section textarea').css('color', 'grey')
    })

    $('aside #paragraph-color #orange').click( () => {
        $('section textarea').css('color', 'orange')
    })

    $('aside #paragraph-color #pink').click( () => {
        $('section textarea').css('color', 'pink')
    })

})
