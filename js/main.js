/*********************
 * Cats filter
*********************/

$(document).ready(function(){

    // Icon database
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
    ];

    // ICONS SECTION
    const inconsSection = $('.icons-section');

    // COLORS
    let colors = [
        'col-blue',
        'col-orange',
        'col-purple'
    ];
    console.log(colors);

    const colored = colorIcons (icons, colors)
    // PRINT INTO DOM
    printIcons(colored, inconsSection);
    console.log(colorIcons (icons, colors));




}); // <-- end doc. ready

// PRINT ICONS FUNCTION
function printIcons( icons, inconsSection ) {

    icons.forEach( ( i ) => {
        // DESTRUCTURING
        const { family, prefix, name, color } = i

        // PRINT INTO DOM
        const printIcon = 
        `
        <div class="icon-container txt-upper">
            <i class="${family} ${prefix}${name} ${color}"></i>
            <p class="icon-name">${name}</p>
        </div>
        ` 

        return inconsSection.append(printIcon)
    });
};

// ICONS COLOR
function colorIcons (icons, color) {

    // GET TYPES
    const types = typeIcons( icons )

    // GET COLORS
    const coloredIcons = icons.map(( i ) => {
        const index = types.indexOf( i.type );

        return {
            ...i,
            color: color[index]
        }
    });

    return coloredIcons;
}

// ICONS TYPE
function typeIcons( icons ) {

    const types = [];

    icons.forEach( i => {
        
        if ( !types.includes( i.type) ) {
            types.push( i.type)
        }

    });

    return types;

};