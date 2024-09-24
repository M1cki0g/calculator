let lcd = document.getElementById("lcd")

    function appendToDisplay(n){
       lcd.value += n
    }

    function calculate(){
        try{
        let exp = lcd.value
        let result = eval(exp)
        lcd.value = result
    }
    catch(error){
        lcd.value = "Error"
    }
    }

    function clearDisplay(){
        lcd.value = "";
        
    }

