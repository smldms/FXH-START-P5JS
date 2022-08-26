////////////////INFO & FEATURES
let myTitle = "FXH START";
let present = '<h2>' + myTitle + '</h2><h3>by smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.08"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
    "Format": format.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let globalW = window.innerWidth;
let globalH = window.innerHeight;
let globalSize = 2048;
let cnv;
let pD = 1;
let gen;




function setup() {
    randomSeed(seed);
    noiseSeed(seed);
    cnv = createCanvas(globalSize * format.ww, globalSize * format.hh);
    cnv.parent('fullScreen');
    background(10);
    rectMode(CENTER)
}

function draw() {
    noStroke()
    fill(255)
    ellipse(width/2, height/2, height/4)
        // fxpreview()
        // saver()
        // timer()
    }