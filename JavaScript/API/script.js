async function display_img(){
    try{
        api = await fetch("https://source.unsplash.com/random") 
        if(api.ok){
            document.getElementById("container")
        }
    }catch(error){
        console.error("Some Errorneous thing has come into play please escape the room.")
    }
}