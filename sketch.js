let imgs = [];
let water, snow, tree, cloud;

function preload() {
    water = loadImage('images/water.jpg');
    snow = loadImage('images/snow.jpg');
    tree = loadImage('images/tree.jpg');
    cloud = loadImage('images/cloud.jpg');
  
}

function setup() {
    createCanvas(1000, 1500);
    background(0);
    frameRate(100);
    imgs.push(water);
    imgs.push(snow);
    imgs.push(tree);
    imgs.push(cloud);
}

function draw() {
    let r = random(imgs);
    let x = random(r.width);
    let y = random(r.height);
    let c = r.get(int(x), int(y));
    fill(c);
    noStroke();
    rect(x, y, 20, 20);
}