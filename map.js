const map = new Map([['a',1],['b',2]])
map.set('c',3) //set is the map method not data structure
map.delete('c')
console.log(map.has('a'))
console.log(map.size)
map.clear()

for(const [key,value] of map){
    console.log(`${key}: ${value}`)
}