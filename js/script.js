const URL_API = "https://api.dictionaryapi.dev/api/v1/entries/en/";
const URL_WORDS_EN = "";
var datas=null;

onEnterListener = (e) =>
{
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
                }).then(data => {
                        res = data;
                        // res[]
                        datas = data
                        console.log(res);
                        button = document.querySelector('#show-modal');
                        button.click();
                        title = document.querySelectorAll('.modal-title');
                        title.innerText = "new file";
                    })

        }
            
    }

} 

const onload = () =>{
    console.log("started onload");
    input = document.querySelector(".custom-input")    
    input.addEventListener("keyup",onEnterListener);
}
