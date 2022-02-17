/*
  Este ejercicio se trata de buscar un patrón,  
  de paréntesis abiertos a la derecha "(" existen 
  en el string

   si tienes estos casos de paréntesis inválidos: 
   
   ")"
   ")("
   "()"
     

   el paréntesis se omite, solo se deben contar los paréntesis 
   validos los cuale son:
   
   "(" paréntesis valido
   "((" 2 paréntesis validos
   ")((" solo 1 paréntesis es valido y es el último
   "(()" 1 paréntesis es valido, pero los 2 ultimos no
   "()))(" solo 1 paréntesis es valido y es el último 
   "(())((" el primer paréntesis y los 2 últimos son validos 
   ")((" el último paréntesis es valido

   NOTA: debes contar cuantos paréntesis, validos existen en el string de
        paréntesis y el total de validos. Adicional la validadción se 
        produce en pares y sin par en caso de que no exista.

   )(((()))((()))))

*/


let str = ")(((()))((()))))"; 

function contarPatronValido(str){
  //...
}