let mug = {
    volume: 120,
    content: water,
    color: 'red',
    brand: 'Küchenland'
};
function water (waterVolume) {
    if(waterVolume > 120){
        return `This mug is too small for ${waterVolume} ml`
    }  
        return `This mug is pretty good for ${waterVolume} ml`
    
}
console.log(mug.content (125))