//PROGRAMA QUE EVALUA UNA EXPRESION POSTFIJA
//María Alejandra Velazco Baltazar 2°D

class Stack{
    constructor(){
     this.PilaOperadores = [];
  }

  //Métodos
  //Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
  push(elemento){
   this.PilaOperadores.push(elemento);
   return this.PilaOperadores;
  }
  //Retorna el último valor ingresado a la pila, sacándolo de ésta.
  pop(){
   return this.PilaOperadores.pop();
  }
   //Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
   peek(){//o inspeccionar ()
    return this.PilaOperadores[this.PilaOperadores.length -1];
   }
   //Retorna el número de elementos que contiene la pila.
   size(){
    return this.PilaOperadores.length;
   }
   //Muestra el contenido de la pila.
   print(){
    console.log(this.PilaOperadores);
   }
}

console.log(evaluacion("456*+"));

function evaluacion(expresionSufija){
  const PilaOperadores = new Stack();
  var simbolos = expresionSufija.split("");//La expresion a evaluar la volvemos cadena con split();
    //si no pones "" como parametro del split te va a dejar todo junto como un solo elemento, con el "" separa cada caracter o simbolo
  for(let i=0; i<simbolos.length; i++){//Recorremos las lista de izquierda a derecha 
      //en las siguientes dos lineas usas i, cuando deberias usar simbolos[i] que es el que tiene un numero o un operador
      let num=parseInt(simbolos[i]);
    if(num>=0 && num<=9)//es un numero     //i == "1234567890"){//si i es igual a operando
      PilaOperadores.push(num); //lo metemos a la pila parseInt(i));//entonces i lo agregamos a PilaOperadores como entero
    }
    else{
      var op2 = PilaOperadores.pop();//obtendremos los operando de la pila
      var op1 = PilaOperadores.pop();
        ///estas mandando i es decir un numero de posición y no el simbolo de la operacion
      var res = aritmetica(simbolo[i],op1,op2);//i,op1,op2);//obtenemos el resultado mediante la funcion aritmetica 
      PilaOperadores.push(res);//y agregamos el resultado a la PilaOperadores
    } 
  }
  return PilaOperadores.pop(); //para finalizar retornamos el ultimo valor de la pila que contiene el resultado de toda la espresion
}

function aritmetica(operador,op1,op2){//se reciben 3 parametros
  if(operador == "*"){
    return op1*op2;
  }
  else if(operador == "/"){
    return op1/op2;
  }
  else if(operador == "+"){
    return op1+op2;
  }
  else{
    return op1-op2;
  }
}
