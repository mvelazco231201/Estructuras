//PROGRAMA DE ORDENAMIENTO POR MONTÍCULO
//María Alejandra Velazco Baltazar 2°D

var vec = new Array(10);
for(let i=0; i<vec.length; i++){
    vec[i]=Math.floor(Math.random()*10)+1;
}
console.log("Vector sin ordenar: ");
console.log(vec);
console.log(" ");

monticulo(vec);
function monticulo(vec){
    while(vec!=null){
        var n, i, posizq, posder;
        n=vec.length-1;//Posición del ultimo elemento
        i=Math.floor(n/2); //Posición de ultimo padre
        posizq=2*i+1;//hijo izquierdo
        posder=2*i+2;//hijo derecho
        var temp=0;//creamos variable temporal para ordenar
        if(vec[posizq]>vec[posder]){
            temp=vec[posizq];
            vec[i]=temp;
        i--;
        }
    }
    
}
class MonticuloBinario{
    constructor(){
        this.vec= new Array();
        this.cont=0;
    }
    raiz(hoja){
        return hoja=this.vec[0];
    }
    //Método para enviar el nodo mayor hacia arriba
    nodoMayor(i){
        var posizq, posder;
        posizq=2*i+1;//hijo izquierdo
        posder=2*i+2;//hijo derecho
        var temp=0;

        if(vec[posizq]>vec[i]){
            temp=vec[posizq];
            vec[posizq]=vec[i];
            vec[i]=temp;
        retur
        }
        else{
            temp=vec[posder];
            vec[i]=temp;
            return temp;
        }
        if(vec[i]>i){
         var tmp=0;
         tmp=vec[i];
         vec[i]=tmp;
         return tmp;
        }
        else{
            tmp=i;
            vec[i]=tmp;
            return tmp;
        }
    }
    //Método para saltar a otro hijo
    salto(){
        var n, i;
        n=this.vec.length-1;//Posición del ultimo elemento
        i=Math.floor(n/2); //Posición de ultimo padre
        for (let j=0; j<(n/2-1); j++){
        i--;//padres anteriores
        }
        return nodoMayor(this.vec[i]);
    }
    //Método para enviar hoja a raíz
    enviar(){
        var hoja=0;
     hoja=this.vec[this.cont==this.vec.length-1];
     raiz(hoja);
     this.cont--;
     return newVector(hoja);
    }
    //Método que ordena el vector
    newVector(hoja){
        var newVec = new Array();
        var cont=1;
        hoja = newVec[this.newVec.length-cont];
        cont++;
        return newVec;
    }
}