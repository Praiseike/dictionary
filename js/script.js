const URL_API = "https://api.dictionaryapi.dev/api/v1/entries/en/";
const URL_WORDS_EN = "";
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const onload = () =>{
    console.log("started onload");
    input = document.querySelector(".custom-input")
    
    input.addEventListener("keyup",(e) =>{
        if(e.key === "Enter")
        {   
            word = document.querySelector(".custom-input").value        
            if (word == "")
                alert("please type in  a word to search");
            else{

                

                let url = URL_API+word;

                console.log(url);

                fetch(url)
                .then(response => {
                    // handle the response
                    return response.json()
                    }).then(data => console.log(data[0]))
    
                // fetch(url,option={method:"get",mode:"no-cors"})
                //     .then((res) => {
                //         return res.json();
                //     })
                //     .then( data => console.log(data[0]['word']))    
            }
                
        }
    });
    
    
}

const onload2 = () =>{
    console.log("started onload");
    input = document.querySelector(".custom-input")
    
    input.addEventListener("keyup",(e) =>{
        if(e.key === "Enter")
        {   
            word = document.querySelector(".custom-input").value        
            if (word == "")
                alert("please type in  a word to search");
            
            let url = URL_API+word;
            console.log(url);
            
            xhttp = new XMLHttpRequest()
            xhttp.open("GET",url,true)
            xhttp.setRequestHeader("Access-Control-Allow-Origin","https://api.dictionaryapi.dev/api/v1/entries/en")
            xhttp.setRequestHeader("Content-Type","text/json")
            xhttp.onreadystatechange = () =>{
                if( this.readyState == 4 || this.status == 200)
                {
                    data = JSON.parse(this.responseText);
                    console.log(data)
                }
            }

            xhttp.send()
        }
    });
    
    
}