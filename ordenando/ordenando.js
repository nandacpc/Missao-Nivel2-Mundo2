swap = (vetor, pos1, pos2) => {
    let temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};  
shuffle = (vetor, quant) => {
    for (let i = 0; i< quant; i++){        
        let pos1 = Math.floor(Math.random() * quant);
        let pos2 = Math.floor(Math.random() * quant);
        let temp = vetor[pos1];
        vetor[pos1] = vetor[pos2];
        vetor[pos2] = temp;
    }
    return vetor;
};
bubble_sort = (vetor) => {
    let vetorLeng = vetor.length;
    for (let i =0; i < vetorLeng; i++){
        for(let j = 0; j < vetorLeng - 1; j++){
            if(vetor[j] > vetor[j + 1]){
                let temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
    return vetor;
};
selection_sort = (vetor) => {
    let vetorLeng = vetor.length;
    for (let i = 0; i < vetorLeng - 1; i++) {
        let min = i;
        for (let j = i + 1; j < vetorLeng; j++) {
          if (vetor[j] < vetor[min]) {
            min = j;
          }
        }
        if (min !== i) {
          let temp = vetor[i];
          vetor[i] = vetor[min];
          vetor[min] = temp;
        }
      }
    return vetor;
};
particionamento = (vetor, start, end, pivot) => { 
    while (start <= end) {
      while (vetor[start] < pivot) {
        start++;
      }
      while (vetor[end] > pivot) {
        end--;
      }
      if (start <= end) {
        [vetor[start], vetor[end]] = [vetor[end], vetor[start]];
        start++;
        end--;
      }
    }  
    return start;
  };
quick_sort = (vetor, start, end) => {
    if (start >= end) {
      return;
    }  
    const pivot = vetor[Math.floor((start + end) / 2)];
    const indice = particionamento(vetor, start, end, pivot);  
    quick_sort(vetor, start, indice - 1);
    quick_sort(vetor, indice, end);
  }
  
