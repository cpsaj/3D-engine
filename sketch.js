prik1Pos = [10, 10, -200];
prik2Pos = [10, -10, -200];
prik3Pos = [-10, 10, -200];
prik4Pos = [-10, -10, -200];
prik5Pos = [10, 10, -250];
prik6Pos = [10, -10, -250];
prik7Pos = [-10, 10, -250];
prik8Pos = [-10, -10, -250];
camPos = [0, 0, 0];
screenZ = -100;
speed = 0.1;

let vektorMidt;

prik1Screen = [0, 0];
prik2Screen = [0, 0];

function setup() 
{
  createCanvas(400, 400);
  vektorMidt = [width / 2, height / 2];

  sliderX = createSlider(-180, 180, 0, 1);
  sliderX.position(250,10);

  sliderY = createSlider(-180, 180, 0, 1);
  sliderY.position(250,30);

  sliderZ = createSlider(-180, 180, 0, 1);
  sliderZ.position(250,50);
}

function draw() 
{
  background(220);

  //Laver punkter
  makePoint(prik1Pos[0], prik1Pos[1], prik1Pos[2]);
  makePoint(prik2Pos[0], prik2Pos[1], prik2Pos[2]);
  makePoint(prik3Pos[0], prik3Pos[1], prik3Pos[2]);
  makePoint(prik4Pos[0], prik4Pos[1], prik4Pos[2]);
  makePoint(prik5Pos[0], prik5Pos[1], prik5Pos[2]);
  makePoint(prik6Pos[0], prik6Pos[1], prik6Pos[2]);
  makePoint(prik7Pos[0], prik7Pos[1], prik7Pos[2]);
  makePoint(prik8Pos[0], prik8Pos[1], prik8Pos[2]);

}

//Funktion der laver punkter
function makePoint(x, y, z)
{ 
  let pointScreenX = (x + sliderX.value()) * screenZ / (z+sliderZ.value());
  let pointScreenY = (y + sliderY.value()) * screenZ / (z + sliderZ.value());

  point(pointScreenX + vektorMidt[0], pointScreenY + vektorMidt[1]);
}

