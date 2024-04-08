import './smallletter/i'
import './smallletter/j'
import './smallletter/k'
import './smallletter/l'
import './smallletter/m'
import './smallletter/n'
import './smallletter/o'
import './smallletter/p'
import './smallletter/q'
import "./return/returnn"
export function x1() {
    for (let i = 0; i <= 3; ++i)
        for(let j = 0; i <= 3; ++j)
            for(let k = 0; k <= 3; ++k)
console.log(x1, i, j, k)
}
export function y1(){
    for(let l = 0;-3 <= l && l<=3; ++l||--l)
       for(let m = 0;-3<=m && m<=3 ;++m||--m)
          for(let n = 0 ;-3<=n && n<=3;++n||--n)
console.log(y1,l,m,n)
}
export function z1(){
    for(let o=0;o>=3; o--)
        for(let p=0; p>=3; p--)
            for(let q=0; q>=3; q--)
console.log(z1,o,p,q)
}
export function t1(){
        do `x1*y1`
        while ({
            z: `0,z<=1,z++`
        })
        do `x1*z1`
        while ({
            y: `0,z<=1,y++`
        })
        do `y1*z1`
        while ({
            x: `0,x<=1,x++`
        })
}
