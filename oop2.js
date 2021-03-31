class Hostel{
constructor(hname,hLoc,htype,hcolor,hprice){
    this.name=hname
    this.Loc=hLoc
    this.type=htype
    this.color =hcolor
}
info(){
    return`My hostel is ${this.name} in ${this.Loc} and it is ${this.type} which is ${this.color} in color`
}
}

class Model extends Hostel{
    constructor(hname,hLoc,htype,hcolor,hRN,hP){
    super(hname,hLoc,htype,hcolor)
        this.hRoom =hRN
        this.hprice=hP
    }
remark(){
    return this.info() +`the room number is ${this.hRoom} and the price is ${this.hprice}`
}   
}

function Submit(){
    let HostelN=inpN.value
        HostelL=inpL.value
        HostelT=inpT.value
        HostelC=inpC.value
    Joshua = new Model (HostelN,HostelL,HostelT,HostelC, 6,"$40")

    let show=document.getElementById('demo');
    show.innerHTML = Joshua.remark()
}
