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

convertir("(A+(B*C))");

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
    let Operacion = expresionInfija.split("");
//Recorreremos la lista para encontrar los operadores e ir agregando a nuestra pila
    for (let i=0; i<Operacion.length; i++){
        if(Operacion[i] >= 'A' && Operacion[i] <= 'Z'){
            expresionSufija.agregar(Operacion[i]);//agregamos el operando en un array llamado expresionSufija
        }
        else if (Operacion[i]=="("|| Operacion[i]=="*" ||Operacion[i]=="/"||Operacion[i]=="+"||Operacion[i]=="-"){

            if(PilaOperadores.empty()==true){//Si  nuestra pila esta vacia
                PilaOperadores.push(Operacion[i]);//agregamos el valor a una Pila de Operadores
            }
            else if(precedencia[Operacion[i]]>precedencia[PilaOperadores.peek()]){//si el valor es mayor al ultimo valor que ya estaba en la pila
                PilaOperadores.push(Operacion[i]);//agregamos ese valor a la pila
                }
            else if(precedencia[Operacion[i]]==precedencia[PilaOperadores.peek()]){//si el valor es igual al ultimo valor que estaba en la pila
                    expresionSufija.agregar(PilaOperadores.pop());//el valor de la pila lo sacamos y lo agregamos a nuestro array
                    PilaOperadores.push(Operacion[i]);//y el valor lo agregamos a la pila

                }
            else if(precedencia[Operacion[i]]<precedencia[PilaOperadores.peek()]){//si el valor es menor al ultimo valor de la pila
                    while(precedencia[Operacion[i]]<=precedencia[PilaOperadores.peek()]){//sacaremos los valores de la pila e iremos agregandolos al array
                        expresionSufija.agregar(PilaOperadores.pop());//mientras que el valor sea menor o igual al ultimo valor de la pila
                    }
                    PilaOperadores.push(Operacion[i]);//finalizado el ciclo agregamos el valor a la pila
                }
            else if(Operacion[i]==")"){//es un simbolo tope 
                    let simTope = PilaOperadores.pop();//por lo que se va a extraer un simbolo de la pila de Operadores
                    while(simTope != "("){ 
                    simTope = PilaOperadores.pop();//y el simbolo tope sera igual a extraer ultimo elemento en la Pila de Operadores
                    expresionSufija.agregar(simTope);//al array le agregamos el simbolo tope
                }
             }
          }
        }
        while(!PilaOperadores.empty()){//mientras pila de Operadores no este vacia
            expresionSufija.agregar(PilaOperadores.pop());//a la expresionSufija le vamos a agregar, lo que vamos a extraer de Pila de Operadores
    }
        return console.log(expresionSufija.mostrar());//retornamos los valores de expresionSufija
    }
   
        
