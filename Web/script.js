document.addEventListener("keypress", function (e) {if (13 ==e.keyCode){encrypt();}})

document.getElementById("encrypt").addEventListener("click", encrypt);



function encrypt() {
    var key = document.getElementById("key").value;
    var plaintext = document.getElementById("plaintext").value.split(""), i,print; 
   key = Number(key);
    for(i = 0; i < plaintext.length;i++){
     if (/^[a-z]+$/.test(plaintext[i])){
        print = plaintext[i].charCodeAt(0);
        print = (print - 97 + key) %26 + 97;
        plaintext[i] = String.fromCharCode(print);
          }else if (/^[A-Z]+$/.test(plaintext[i])){
        print = plaintext[i].charCode(0);
        print = (print - 65 + key) %26 + 65;
        plaintext[i] = String.fromCharCode(print);
        
          }     
        }
    document.getElementById("output").value = plaintext.join("") ;
    
    
}function core() {
    var key = document.getElementById("key").value;
    var plaintext = document.getElementById("plaintext").value.split(""), i,print; 
   key = Number(key);
    for(i = 0; i < plaintext.length;i++){
     if (/^[a-z]+$/.test(plaintext[i])){
        print = plaintext[i].charCodeAt(0);
        print = (print - 97 + key) %26 + 97;
        plaintext[i] = String.fromCharCode(print);
          }else if (/^[A-Z]+$/.test(plaintext[i])){
        print = plaintext[i].charCode(0);
        print = (print - 65 + key) %26 + 65;
        plaintext[i] = String.fromCharCode(print);
        
          }     
        }
    document.getElementById("output").value = plaintext.join("oy a");
    
    
}


function pigLatin(){
    var plaintext = document.getElementById("plaintext").value.split(" "),first; for (i = 0; i < plaintext.length; i++){
    first = plaintext[i].slice(0,1);
        if (/[aeiouy]/i.test(first)){plaintext[i += "way"];
                                    
        }
    }
}