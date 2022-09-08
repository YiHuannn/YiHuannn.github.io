let isDarkMode = false;
//right now the page is in light mode, so dark mode is false.

function switchModes(){
    //When the button is clicked, the switchModes function would run.
    if(isDarkMode === false){
        //if dark mode is false (AKA when webpage is in light mode), the following would run.
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        //When dark mode is false, --color-01 changes to #f2fbeb, while --col-02 changes to #171219.
        document.documentElement.style.setProperty("--col-06", "#5ea892");
        //--col-06 changes to #5ea892.
        document.getElementById("modeButton").innerHTML = "Light Mode";
        //the words on the button shows "Light Mode".
        isDarkMode = true;
        //Now the webpage is in darkmode, therefore isDarkMode=true.
    } else {
        //if dark mode is true (AKA when webpage is in dark mode), the following would run.
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
         //--color-01 changes to #171219, while --col-02 changes to #f2fbeb.
        document.documentElement.style.setProperty("--col-06", "#0d0d0d");
        //--col-06 changes to #0d0d0d.
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        //the words on the button shows "Dark Mode".
        isDarkMode = false;
        //Now the webpage is in lightmode, therefore isDarkmode=false.
    }

}