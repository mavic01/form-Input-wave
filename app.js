const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
    label.innerHTML = label.innerText.split('').map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`).join('')
    //{index * 50}ms - ist one will be 0 * 50, 2nd one 1 * 50, etc..
    //.SPLIT SPLITS IT INTO AN ARRAY WITH EACH CHARACTER AS AN ARRAY ITEM. 
    //.JOIN TURNS IT BACK INTO A STR 
})