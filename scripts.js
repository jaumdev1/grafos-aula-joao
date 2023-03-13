const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blockSize = 100;
const width = canvas.width / blockSize;
const height = canvas.height / blockSize;
console.log("colunas:"+ width);
console.log("linhas:"+ height);
console.log("numero de vertices:"+width*height)
const vertice = {
  arestas:[],
  positionX:0,
  positionY:0,
  pesoMenorCaminho:Infinity,
  verticeAnteriorMenorCaminho:null,
}
const aresta={
 verticeInicial:null,
 verticeFinal:null,
 peso:1,
}
for (let xindex = 0; xindex <= width; xindex++) {
  for (let yindex = 0; yindex <= height; yindex++) {
    if((xindex+yindex) % 2 === 0)
    ctx.fillStyle = "#ff753a";
    else
    ctx.fillStyle = "#ff0000";
    ctx.strokeRect(xindex * blockSize, yindex * blockSize, blockSize, blockSize);
    ctx.fillRect(xindex * blockSize, yindex * blockSize, blockSize, blockSize);
    
  }
    
}



