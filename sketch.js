prik1Pos = [100, 200, -200];
prik2Pos = [300, 200, -200];
camPos = [200, 200, 0];
screenZ = -100;

prik1Screen = [0, 0];
prik2Screen = [0, 0]

function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(220);
  prik2Pos[2] += 1;
  prik1Pos[2] += 1;

  makePoint(prik1Pos[0], prik1Pos[1], prik1Pos[2]);
  makePoint(prik2Pos[0], prik2Pos[1], prik2Pos[2]);
}

function makePoint(x, y, z)
{
  let pointScreenX = x * screenZ / z;
  let pointScreenY = y * screenZ / z;
  point(pointScreenX, pointScreenY);
}
