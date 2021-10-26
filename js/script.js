const URL_API = "https://api.dictionaryapi.dev/api/v1/entries/en/";
const URL_WORDS_EN = "";
var store = {
    title: null,
    data:null
}

const handleQuery = () =>{
    word = document.querySelector(".custom-input").value        
    if (word == "")
        alert("please type in  a word to search");
    else{
        let url = URL_API+word;
        console.log(url);
        fetch(url)
        .then(response => {return response.json()})
        .then(data => {
                res = data;
                // res[]
                store.data = data
                // console.log(res);
                button = document.querySelector('#show-modal');
                button.click();
                store.title = document.querySelector('.modal-title');
                store.content = document.querySelector('.modal-body');
                store.content.innerText = "Meanings and definitions for searched words";
                store.title.innerText = "Searched word";

            })
        .catch(error => alert("Sorry, an error occured"));
    }

}

const onload = () =>{
    console.log("started onload");
    input = document.querySelector(".custom-input")    
    input.addEventListener("keyup",(e) => {
        if(e.key === "Enter")
            handleQuery();
    });
}
