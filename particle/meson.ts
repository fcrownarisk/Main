import '.Bigletter'
import './smallletter'
import './Letter/midletter'
import './XYZT'
enum PAI{
    ABCD, EFGH, IJKL, MNOP,QRST ,UVW ,XYZ
}
console.log(JSON.stringify(PAI))
enum MULTIPLE{
    abc,def,ghi,jkl,mno,pqr,stu,vwx,yz
}
console.log(JSON.stringify(MULTIPLE))
enum det{
    ABCD,"abc*EFGH","def*HIJK","ghi*LMNO","jkl*PQRT",'stu*TUVW','vwx*XYZ'
}
console.log(JSON.parse('det'))
enum trace{
     x1y1z1t1,x2y2z2t2,x3y3z3t3,t4z4y4x4,t5z5y5x5,t6z6y6x6
}
console.log(JSON.parse('trace'))
enum dettrace{
     det,trace}
console.log(dettrace)
enum tracedet{
     trace,det
}
console.log(tracedet)
enum PAIMULTILE{
     PAI,MULTIPLE
}
enum MULTIPLEPAI{
     MULTIPLE,PAI
}
