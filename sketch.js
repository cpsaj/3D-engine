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

  prik1Screen[0] = (prik1Pos[0] * screenZ) / prik1Pos[2]; 
  prik1Screen[1] = (prik1Pos[1] * screenZ) / prik1Pos[2]; 
  prik2Screen[0] = (prik2Pos[0] *screenZ) / prik2Pos[2];
  prik2Screen[1] = (prik2Pos[1] *screenZ) / prik2Pos[2];

  point(prik2Screen[0], prik2Screen[1]);
  point(prik1Screen[0], prik1Screen[1]);
}
