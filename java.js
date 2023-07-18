let x =[1,2,24,8,16,22,27,98,10]
let y=[1,2,22,24,56,33,49,51,10]
let z=[]
for(i=0;i<x.length;i++)
{
    for(j=0;j<y.length;j++)
    {
        if(x[i]==y[j]){

        
        
        z.push(x[i])
        }
    }
}
console.log(z)
document.write(z)