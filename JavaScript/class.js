class Area{
    constructor(length, width){
        this.length = length;
        this.width = width;
        this.r = 0;
    }
    rectangle(){
        this.r = this.length*this.width;
        return this.r;
    }
    square(){
        this.rectangle();
        return this.r;
    }
    triangle(){
        this.r = 1/2*this.length*this.width;
        return this.r;
    }
}
document.getElementById("calculate").addEventListener("click", ()=>{
    let dd = document.getElementById("dropdown");
    let index = dd.selectedIndex;
    let selected = dd.options[index].value;
    // let selected = dd.options[index].text;
    let length = prompt("Enter length:")
    let width = prompt("Enter width:")
    const myObj = new Area(length, width);
    if(selected == "square"){
        let res = myObj.square();
        alert(res)
    }
    else if(selected == "rectangle"){
        let res = myObj.rectangle();
        alert(res);
    }
    else if(selected == "triangle"){
        let res = myObj.triangle();
        alert(res);
    }
})