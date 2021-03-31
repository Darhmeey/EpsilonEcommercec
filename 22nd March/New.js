// Rest and Spread operators\

let Language = ['English','Yoruba','French','Spanish','German','Hindi']
let text = []
for(i of Language){
    text+=`<option>${i}</option>`
}
let select = document.getElementById('Sel')
select.appendChild(text)
