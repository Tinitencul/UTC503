const val="CNAM".split("");
let res = val
console.log(val.map((char,index)=>(index%2!==0)?char.toUpperCase() : char.toLowerCase()));

