//✅:
let isIronMan : boolean = true;
//✅:
    let isWonderWoman : boolean;	
//🚫:
    let isThor = true;

if(isIronMan) {
    console.log('is ironman');
}else{
    console.log('no es ironman');
}

isIronMan = revertir();

if(isIronMan) {
    console.log('is ironman');
}else{
    console.log('no es ironman');
}

function revertir(){
    return false;
}
