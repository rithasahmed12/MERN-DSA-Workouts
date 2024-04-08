let a = [1,2];
let b= [3,4,5];

function cartesianProduct(a,b){
    let array= []
    for(let i=0 ; i< a.length; i++){
        for(let j=0 ; j< b.length ; j++){
            array.push([a[i],b[j]])
        }
    }
    return array
}
console.log(cartesianProduct(a,b))