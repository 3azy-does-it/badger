(function(app){
    'use strict'
    const pageItems={};

    app.toDoStartUp=function(){
        pageItems.span= document.getElementById('span');
        pageItems.inputBill= document.getElementById('bill-input');
        pageItems.inputTip= document.getElementById('tip-input')
        pageItems.button= document.getElementById('button')


        pageItems.button=addEventListener('click',calculation);

        function calculation(){
            // const solution= pageItems.inputBill.value * (pageItems.inputTip.value/100 + 1)
            // pageItems.span.innerText= solution.toFixed(2)
            
            const inputBill=pageItems.inputBill.value;
            const inputTip=pageItems.inputTip.value
            const solution= inputBill * (inputTip/100 + 1)
            pageItems.span.innerText= solution.toFixed(3)
        }

    }
    
})(window.app = window.app || {});