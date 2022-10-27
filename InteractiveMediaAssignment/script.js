function hideImage() {
    document.getElementById("x").style.display = "none";
    //get the element with the Id of x in the website document. In its CSS style, set its display to none, therefore making the element hidden.
    document.getElementById("closeAudio").play();
    //get the element with the Id of closeAudio in the website document. Play the audio.
}

function hideImage2(){
    document.getElementById("x2").style.display = "none";
    document.getElementById("closeAudio").play();
}

function hideImage3(){
    document.getElementById("x6").style.display = "none";
    document.getElementById("closeAudio").play();
}

function hideImage4(){
    document.getElementById("hiddenx3").style.display = "none";
    document.getElementById("closeAudio").play();
}

function showAlert(){
    var myText = "hahaha";
    //The variable myText equals to what you want written in the alert text box, in this case it is "hahaha"
    alert(myText);
    //putting what you want written in alert brackets, makes the text show up as an alert.
    document.getElementById("laugh").play();
}

function showAlert2(){
    var myText2 = "You'll never defeat me!";
    alert(myText2);
    document.getElementById("laugh").play();
}

function showError(){
    var a = document.getElementById("hiddenPopup1")
    var b = document.getElementById("hiddenPopup2")
    var c = document.getElementById("hiddenPopup3")
    if(a.style.display = "none"){
        a.style.display = "block";
        //get the element with the Id of hiddenPopup1 in the website document. 
        //In its CSS style, if the display is set to none (which means the element is hidden), change the display to block, making the element visible.
    }
    if(b.style.display = "none"){
        b.style.display = "block";
    }
    if(c.style.display = "none"){
        c.style.display = "block";
    }
    document.getElementById("closeAudio").play();
}

function showVirus(){
    var d = document.getElementById("virus")
    var e = document.getElementById("virus2")
    var f = document.getElementById("virus3")
    if(d.style.display = "none"){
        d.style.display = "block";
        //get the element with the Id of virus in the website document. 
        //In its CSS style, if the display is set to none (which means the element is hidden), change the display to block, making the element visible.
    }
    if(e.style.display = "none"){
        e.style.display = "block";
    }
    if(f.style.display = "none"){
        f.style.display = "block";
    }
    document.getElementById("virusSound").play();
}

function showFlash(){
    if(document.getElementById("flashingPopup").style.display = "none")
    {
        document.getElementById("flashingPopup").style.display = "block";
        //get the element with the Id of flashingPopup in the website document. 
        //In its CSS style, if the display is set to none (which means the element is hidden), change the display to block, making the element visible.
    }
    document.getElementById("popup").play();
}