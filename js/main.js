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

    // ICONS CONTAINER
    let iconContainer = $('.icons-section');
    // PRINT ICONS
    printIcons( icons, iconContainer )

    // SELECTION FILTER
    let filterSelect = $('#filter');
    // ADD OPTION FILTER
    optionFilter(icons, filterSelect)
    // SET FILTER
    filterSelect.change(() => {
        const selected = filterSelect.val();

        const filterIcons = filterFunc(icons, selected);
        printIcons( filterIcons, iconContainer )
    });

  }); // <-- end doc. ready

//   PRINT ICONS COLORED
function printIcons( icons, container ) {
    
    container.html('');

    icons.forEach( el => {
        
        // DESTRUCTURING
        const { family, prefix, name, type } = el

        let color = null;

        if ( type == 'animal' ) {
            color = 'col-blue'
        } else if ( type == 'vegetable' ) {
            color = 'col-orange'
        } else if ( type == 'user' ) {
            color = 'col-purple'
        }
        let printIcon = 
        `
        <div class="icon-container txt-upper">
            <i class="${family} ${prefix}${name} ${color}"></i>
            <p class="icon-name">${name}</p>
        </div>
        `

        return container.append(printIcon)
    });
    
};

// ADD OPTIONS
function optionFilter(icons, filtered){

    let iconType = []
    
    icons.forEach(( el ) => {

        if ( !iconType.includes(el.type) ) {

            iconType.push(el.type)

            let printOption = 
            `
            <option value="${el.type}">${el.type}</option>
            `
            return filtered.append(printOption)

        }
    });
};

// FILTERED
function filterFunc(icons, filtered) {

    // SET ALL ICONS
    if ( filtered === 'all' ) {
        return icons;
    };

    // SET ICONS TYPE
    let filteredIcon = icons.filter((el) =>  el.type === filtered);

    return filteredIcon;

}