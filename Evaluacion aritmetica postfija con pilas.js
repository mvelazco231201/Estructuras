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
  var simbolos = expresionSufija.split();//La expresion a evaluar la volvemos cadena con split();
  for(let i=0; i<simbolos.length; i++){//Recorremos las lista de izquierda a derecha 
    if(i == "1234567890"){//si i es igual a operando
      PilaOperadores.push(parseInt(i));//entonces i lo agregamos a PilaOperadores como entero
    }
    else{
      var op2 = PilaOperadores.pop();//obtendremos los operando de la pila
      var op1 = PilaOperadores.pop();
      var res = aritmetica(i,op1,op2);//obtenemos el resultado mediante la funcion aritmetica 
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