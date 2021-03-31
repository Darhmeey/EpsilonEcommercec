function press(){
  var inp = document.getElementById('box').value;

  for(var i = 0; i<inp; i++){
      console.log(inp)
      let myinput = document.createElement('input')
      myinput.text = "text";
      myinput.value = "";

      document.getElementById('myform').appendChild(myinput)


  }
}