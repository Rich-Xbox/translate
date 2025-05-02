let text1 = document.querySelector(".text")
let til1 = document.querySelector(".select1")
let tarjima = document.querySelector(".tarjima")
let til2 = document.querySelector(".select2")
let btn = document.querySelector(".translate-btn")

btn.addEventListener("click", ()=>{
  fetch(`https://api.mymemory.translated.net/get?q=${text1.value}&langpair=${til1.value}|${til2.value}`)
  .then(res => res.json())
  .then(data => tarjima.value = data.responseData.translatedText
  )
})
