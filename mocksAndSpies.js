class Spies
{
   addition(){
       let sum = 0
       for( let i = 0;i < arguments.length;i++)
       {
        sum += arguments[i]
       }
return sum

   }
}
module.exports = Spies 