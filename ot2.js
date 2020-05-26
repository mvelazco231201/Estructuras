var vec = [1,12,9,5,6,10];

monticulo(vec);

function monticulo(vec){
    for(let i=vec.length/2-1; i>=0; i--){//encontrando los padres

        let padre = i; //posicion del padre

        //Ubicar posicion de los hijos
        let HijoIzquierdo = 2*padre+1;
        let HijoDerecho = 2*padre+2;

        //Heapificar: se manda el elemento más grande a la raíz
    if(HijoIzquierdo < vec.length && vec[HijoIzquierdo]>vec[padre]){
        padre = HijoIzquierdo;
        }
    
   if(HijoDerecho < vec.length && vec[HijoDerecho] > vec[padre]){
        padre = HijoDerecho;
   }
    else if(padre != vec[padre]){
         var a = vec[i];
    vec[i] = vec[padre];
    vec[padre] = a;
    }
    
}
     //Mandamos la raíz a la ultima hoja
     for(let o=vec.length-1; o >=0; o--){
        var t = vec[0];
     vec[0] = vec[o];
     vec[o] = t;
    for(let j=0; j<vec.length; j++)
    return console.log (vec);
     }   
}
    

 