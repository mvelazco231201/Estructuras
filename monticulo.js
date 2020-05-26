var vec = [12,6,1,5,9]
let n = vec.length; 
heapSort(vec, n);// toma los valores para usarloS en la funcion
console.log("El monticulo ordenado es: \n");
printArray(vec, n);
  
  // Funcion que realiza el heap sort
  function heapSort(vec, n) { 
    //Construir monton maximo
    for (let i = n / 2 - 1; i >= 0; i--)//encuentra los padres
      heapify(vec, n, i);
  
    // Monticulo
    for (let i = n - 1; i >= 0; i--) {
      swap(vec[0], vec[i]);
  
      // hace heapify al elemento raíz para obtener el elemento más alto en la raíz nuevamente
      heapify(vec, i, 0);
    }
  }

  function heapify(vec, n, i) {//n es el largo del vector e i es la ubicacion del elemento
    // Funcion que encuentra el más grande entre el nodo raíz izquierdo y el nodo derecho
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
  
    if (left < n && vec[left] > vec[largest])
      largest = left;
  
    if (right < n && vec[right] > vec[largest])
      largest = right;
  
    // Hace cambio y continua heapificando si la raíz no es el más grande
    if (largest != i) {
      swap(vec[i], vec[largest]);
      heapify(vec, n, largest);
    }
  }

  // Funcion que realiza el cambio entre dos elementos
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;// a
  }
  
  // Funcion que imprime el array
  function printArray(vec, n) {
    for (let i = 0; i < n; i++)
      console.log(vec[i]);
   console.log("\n");
  }

    

  
  