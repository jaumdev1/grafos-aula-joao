const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blockSize = 100;
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
  constructor(verticeF){
 this.verticeFinal=verticeF;
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

function procurarVertice(px, py){
  let verticefind = Grafo.find(vertice=> vertice.positionX == px && vertice.positionY== py);

  return verticefind;
  }

Grafo.forEach((vertice)=>{
  let verticeXY = null;
  if(vertice.positionX+1 <= width-1){
     verticeXY =  procurarVertice(vertice.positionX+1 , vertice.positionY);
     let arestanova  = new Aresta (verticeXY);
     vertice.arestas.push(arestanova);
  }
  if(vertice.positionX-1 >= 0){
    verticeXY = procurarVertice(vertice.positionX-1 , vertice.positionY);
    let arestanova  = new Aresta (verticeXY);
    vertice.arestas.push(arestanova);
 }
 if(vertice.positionY+1 <= height-1){
  verticeXY =  procurarVertice(vertice.positionX , vertice.positionY+1);
  let arestanova  = new Aresta (verticeXY);
  vertice.arestas.push(arestanova);
}
if(vertice.positionY-1 >= 0){
  verticeXY =  procurarVertice(vertice.positionX , vertice.positionY-1);
  let arestanova  = new Aresta (verticeXY);
  vertice.arestas.push(arestanova);
}
})

console.log(Grafo);

