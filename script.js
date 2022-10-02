const btn = document.getElementById('button')
const quote =  document.getElementById('quote')
const author = document.getElementById('author')
const links = document.getElementById('link')
const Select_body =document.getElementsByTagName('body')[0]

// getting data from api 
const generateQuote = async() =>{
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    quote.innerText=data.content
    author.innerText = data.author
}
btn.addEventListener('click',generateQuote)
generateQuote()

// playing with colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener('click',()=>{
    let random_color = getRandomColor()

    //add or remove any element accordingly 
    const arr_color_change = [quote ,author ,links]
     arr_color_change.map((element)=>element.style.color = random_color)
})
