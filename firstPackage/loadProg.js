const load= require('lodash')
const items=[1,[2,[3,[4]]]]
const newitems=load.flattenDeep(items);
console.log(newitems)

//npm i <packagename>
//npm init -y
//install loadash to run this 