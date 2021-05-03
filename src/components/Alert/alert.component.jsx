import React from 'react';

//verificare se funziona
export default function CustomAlert(Severity) {
    console.log('run',Severity);
    if (Severity === 'success') {
        <div class="alert success">
            <span class="closebtn">×</span>
            <strong>Success!</strong> Indicates a successful or positive action.
        </div>
        var close = document.getElementsByClassName("closebtn");
        var i;
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function(){
                var div = this.parentElement;
                div.style.opacity = "0";
                setTimeout(function(){ div.style.display = "none"; }, 600);
            }
        }
    }
    else {
        <div class="alert">
            <span class="closebtn">×</span>
            <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>
        
    }
}