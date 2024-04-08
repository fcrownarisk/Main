import './smallletter/i'
import './smallletter/j'
import './smallletter/k'
import './smallletter/l'
import './smallletter/m'
import './smallletter/n'
import './smallletter/o'
import './smallletter/p'
import './smallletter/q'
import './return/returnnnn'
export function x3() {
    for (let i = 0; i <= 9; i++)
        for (let j = 0; j <= 9; j++)
            for (let k = 0; k <= 9; k++)
console.log(i,j,k)
}
export function y3(){
    for (let l = 0;l >= -9 && l <= 9; l++||l--)
        for(let m = 0;m >= -9 && m <= 9;m++||m--)
            for(let n = 0;n >= -9 && n <= 9;n++||n--)
console.log(l,m,n)
}
export function z3() {
    for (let o = 0; o >= 9; o--)
        for (let p = 0; p >= 9; p--)
            for (let q = 0; q >= 9; q--)
console.log(o,p,q)
}
export  function t3() {
    do `x3*y3`
    while ({
        x: `0,x<=3,x++`
    })
    do `x3*z3`
    while ({
        y: `0,y<=3,y++`
    })
    do `y3*z3`
    while ({
        z: `0,z<=3,z++`
    })
}
