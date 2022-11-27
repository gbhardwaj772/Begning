function isLandscape(width, height){

  return  width>height?"Landscape":"Potrait";
}

let type= isLandscape(21,121);
console.log(type);