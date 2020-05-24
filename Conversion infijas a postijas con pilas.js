//PROGRAMA QUE CONVIERTE EXPRESIONES INFIJAS A POSTFIJAS
//María Alejandra Velazco Baltazar 2°D

/*------------- CLASES PILA Y ARRAY CON SUS RESPECTIVOS MÉTODOS ------------------ */
class Stack{
    constructor(){
     this.PilaOperadores = [];
     this.cont=0;
  }

  //Métodos
  //Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
  push(elemento){
   this.PilaOperadores[this.cont]=elemento;
      this.cont++;
      return this.PilaOperadores;
  }
  //Retorna el último valor ingresado a la pila, sacándolo de ésta.
  pop(){
   this.cont--;
   const elemento = this.PilaOperadores[this.cont];
  delete this.PilaOperadores[this.cont];
   return elemento;
  }
  //Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
  peek(){//o inspeccionar ()
   return this.PilaOperadores[this.cont -1];
  }
  //Retorna el número de elementos que contiene la pila.
  size(){
   return this.cont;
  }
  //Muestra el contenido de la pila.
  print(){
   console.log(this.PilaOperadores);
  }
  //Regresa verdadero o falso si a pila esta vacia
  empty(){
   if (this.cont==0){
      var bool = true;}
  else{
      bool=false;}
    return bool;
  }
}
 
  class Estructura{
     constructor(){
      this.expresionSufija= new Array();
      this.cont=0;
  }
  //Método agregar
   agregar(elemento){
     this.expresionSufija[this.cont]=elemento;
     this.cont++;
  }
   mostrar(){
    let a="";
    for(let i=0; i<this.expresionSufija.length; i++){//recorre el array de uno en uno
        a +=  this.expresionSufija[i];//imprimiendo lo que hay en posicion de i
    }
    return a;
   }
}

convertir("A + B * C");

function convertir(expresionInfija){

    const PilaOperadores = new Stack();
    const expresionSufija = new Estructura();

//Clasificar los operadores de precedencia, para que se vayan agregando a la pila
    precedencia = [];
    precedencia ["*"] = 3;
    precedencia ["/"] = 3;
    precedencia ["+"] = 2;
    precedencia ["-"] = 2;
    precedencia ["("] = 1;

//Convertimos nuestra expresion a un array
    Operacion = expresionInfija.split('');
//Recorreremos la lista para encontrar los operadores e ir agregando a nuestra pila
    for (let i=0; i<Operacion.length; i++){
        if(i=="ABCDEFGHIJKLMNOPQRSTUVWXYZ" || i=="1234567890"){
            expresionSufija.agregar(i);//agregamos i en un array llamado expresionSufija
        }
        else if (i=="("){
            PilaOperadores.push(i);//agregamos i a una Pila de Operadores
        }
        else if(i==")"){//es un simbolo tope 
            let simTope = PilaOperadores.pop();//por lo sera igual a extraer simbolo de la pila de Operadores
        
        while(simTope != "("){ 
            expresionSufija.agregar(simTope);//al array expresionSufija le agregamos el simbolo tope
            simTope = PilaOperadores.pop();//y el simbolo tope sera igual a extraer en la Pila de Operadores
        }
    }
        else {
            while(PilaOperadores.empty()==false && precedencia[PilaOperadores.peek()]>= precedencia[i]){
                expresionSufija.agregar(PilaOperadores.pop());//al array expresionSufija le agregamos, lo que vamos a extraer de la Pila de Operadores
                PilaOperadores.push(i);//y a la Pila de Operadores le vamos a incluir i
            }
            while(PilaOperadores.empty() != false){//mientras pila de Operadores no este vacia
                expresionSufija.agregar(PilaOperadores.pop());//a la expresionSufija le vamos a agregar, lo que vamos a extraer de Pila de Operadores
            }
        }
        
    }
    return console.log(expresionSufija.mostrar());//retornamos los valores de expresionSufija
}

