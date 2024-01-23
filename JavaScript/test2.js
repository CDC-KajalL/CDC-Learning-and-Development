str = "ninunini"
sub_str = "nini"
l = sub_str.length
let t = ""
let count = 0;
for(let i in str){
    for(let j = 0; j<l; j++){
        t+= str[count];
        count+=1;
    }
    if(t===sub_str){
        console.log("yes");
        break;
    }
    else{
        t = "";
        console.log("no")
        count -= Math.floor(l/2 + 1);
    }
}
