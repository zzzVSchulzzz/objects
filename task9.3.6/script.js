let mug = {
    findFunction: find,
    volume: 120,
    content: 'water',
    color: 'red',
    brand: 'Küchenland'
};

mug.methods = find;

function find () {
    if('volume' in mug){
        return `volume is here`
    }  
    if('content' in mug){
        return `content is here`
    } 
    if('color' in mug){
        return `color is here`
    } 
    if('brand' in mug){
        return `brand is here`
    } else {
        return `component is apsent`
    }
    
}
console.log(mug.findFunction())