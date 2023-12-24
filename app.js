let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

document.addEventListener("DOMContentLoaded", function() {
    const images = ["./images/cat1.jpg", "./images/cat2.jpeg", "./images/cat3.jpeg","./images/cat4.jpeg","./images/cat5.jpg"];
    let currentIndex = 0;

    function changeBackground() {
        document.querySelector(".background-container").style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change background every 5 seconds (adjust as needed)
    setInterval(changeBackground, 5000);
});


let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;

    } catch (e){
        console.log("erroe -", e);
        return "No Facts Found";

    }
}