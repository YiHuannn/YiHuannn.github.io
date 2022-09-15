function filterCategory(filterSelection, filterBy){
    //filter selection is category
    //filter by is thing to match
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    //An array is a collection of variables.
    //For 'let itemsToFilter', the webpage/computer would retrieve information/meta data from the array of the element with the class name: "RecipeCardWrapper" from the document.
    //By doing this it is creating a list of all the elements on the webpage that contains the class name: "RecipeCardWrapper".
    for(let listItem of itemsToFilter){
        //Line 8 runs a loop. It runs an if statement on each of the items on the list.
        console.log(listItem)
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
            //If the filterSelection matches the filterBy, for example, author matches KLA. The recipes where the author is KLA would display.
        } else {
            listItem.style.display = "none";
            //If the filterSelection does not match the filterBy, for example, author does not match KLA. The recipes where the author is not KLA would not display.
        }
    }
}

function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    //For 'let itemsToFilter', the webpage/computer would retrieve information/meta data from the array of the element with the class name: "RecipeCardWrapper" from the document.
    for(let listItem of itemsToFilter){
        listItem.style.display = "flex";
        //Since there is no need to filter out specific recipes, we set listItem.style.display = "flex" so all of the recipes would be displayed.
    }
}

