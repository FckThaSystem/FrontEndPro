
console.log('red lion-->>', isLannisterSoldier('red', 'lion'));

console.log('blue, null-->>', isLannisterSoldier('blue', null));

console.log('red, null-->>', isLannisterSoldier('red', null));

console.log('blue, lion-->>', isLannisterSoldier('blue', 'lion'));

function isLannisterSoldier(color, lion){

    // if(color === 'red' && lion === null || lion === 'lion'){
    //     return true;
    // }else{
    //     return false;
    // }
    return (color === 'red' && lion === null || lion === 'lion');

}

