const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blockSize = 50;
const width = canvas.width / blockSize;
const height = canvas.height / blockSize;
console.log("colunas:"+ width);
console.log("linhas:"+ height);
console.log("numero de vertices:"+width*height);
var Grafo= [];
class Vertice  {
  constructor (px, py){
 this.arestas=[];
  this.positionX=px;
  this.positionY=py;
  this.pesoMenorCaminho=Infinity;
  this.verticeAnteriorMenorCaminho=null}
}
class Aresta{
  constructor(){
 this.verticeInicial=null;
 this.verticeFinal=null;
 this.peso=1;
}
}

for (let xindex = 0; xindex < width; xindex++) {
  for (let yindex = 0; yindex < height; yindex++) {
    if((xindex+yindex) % 2 === 0)
    ctx.fillStyle = "#ff753a";
    else
    ctx.fillStyle = "#ff0000";

    let novoVertice = new Vertice(xindex, yindex);
    Grafo.push(novoVertice);

    ctx.strokeRect(xindex * blockSize, yindex * blockSize, blockSize, blockSize);
    ctx.fillRect(xindex * blockSize, yindex * blockSize, blockSize, blockSize);
    
  }
    
}



console.log(Grafo);