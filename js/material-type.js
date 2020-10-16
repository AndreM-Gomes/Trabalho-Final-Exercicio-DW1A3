const category = document.querySelector('#category')
const clear = document.querySelector('.clear')
const search = document.querySelector(".action .btn-primary")
const subcategory = document.querySelector('#subcategory')

const optionsDictionary = {
  carbon: ['Carbon Black', 'Carbon Fiber', 'Diamond', 'Graphite'],
  ceramic: [],
  fluid: [],
  metal: [],
  other: [],
  polymer: [],
  pure: [],
  wood: []
}

const loadNewSelect = () =>
{ 
  search.disabled = true
  subcategory.disabled = true
  subcategory.innerHTML = `<option selected hidden disabled>Select one Subcategory</option>`  
    let select = category.options[category.selectedIndex].value

    var options =  optionsDictionary[select]

    options.forEach(element => {
        subcategory.innerHTML += `<option value='${element}'>${element}</option>`
    });

    subcategory.disabled = false
}

const enableSearch = () => {
  search.disabled = false;
}

const clearInputs = () => {
  category.options[0].selected = true;
  subcategory.disabled = true;
  subcategory.innerHTML = `<option selected hidden disabled>Select one Subcategory</option>` 
  search.disabled = true;
}


category.addEventListener('change', loadNewSelect)
subcategory.addEventListener('change', enableSearch)
clear.addEventListener('click', clearInputs);