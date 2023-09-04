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
  makeBox(50, 60, -150, 100, 120, 100);
}

//Funktion der laver punkter
function makePoint(x, y, z)
{ 
  let coordinates = [];
  let pointScreenX = (x + sliderX.value()) * screenZ / (z + sliderZ.value());
  let pointScreenY = (y + sliderY.value()) * screenZ / (z + sliderZ.value());
  coordinates = [pointScreenX + vektorMidt[0], pointScreenY + vektorMidt[1]]

  return coordinates;
}

function makeBox(x, y, z, w, h, d)
{
  let upperLeftFront = [makePoint(x, y, z)[0], makePoint(x, y, z)[1]];
  let upperRightFront = [makePoint(x-w, y, z)[0], makePoint(x-w, y, z)[1]];
  let lowerLeftFront = [makePoint(x, y-h, z)[0], makePoint(x, y-h, z)[1]];
  let lowerRightFront = [makePoint(x-w, y-h, z)[0], makePoint(x-w, y-h, z)[1]];
  let upperLeftBack = [makePoint(x, y, z-d)[0], makePoint(x, y, z-d)[1]];
  let upperRightBack = [makePoint(x-w, y, z-d)[0], makePoint(x-w, y, z-d)[1]];
  let lowerLeftBack = [makePoint(x, y-h, z-d)[0], makePoint(x, y-h, z-d)[1]];
  let lowerRightBack = [makePoint(x-w, y-h, z-d)[0], makePoint(x-w, y-h, z-d)[1]];

  //Front face
  line(upperLeftFront[0], upperLeftFront[1], upperRightFront[0], upperRightFront[1]);
  line(upperLeftFront[0], upperLeftFront[1], lowerLeftFront[0], lowerLeftFront[1]);
  line(lowerLeftFront[0], lowerLeftFront[1], lowerRightFront[0], lowerRightFront[1]);
  line(upperRightFront[0], upperRightFront[1], lowerRightFront[0], lowerRightFront[1]);

  //Back face
  line(upperLeftBack[0], upperLeftBack[1], upperRightBack[0], upperRightBack[1]);
  line(upperLeftBack[0], upperLeftBack[1], lowerLeftBack[0], lowerLeftBack[1]);
  line(lowerLeftBack[0], lowerLeftBack[1], lowerRightBack[0], lowerRightBack[1]);
  line(upperRightBack[0], upperRightBack[1], lowerRightBack[0], lowerRightBack[1]);

  //Edges
  line(upperRightBack[0], upperRightBack[1], upperRightFront[0], upperRightFront[1]);
  line(upperLeftBack[0], upperLeftBack[1], upperLeftFront[0], upperLeftFront[1]);
  line(lowerRightBack[0], lowerRightBack[1], lowerRightFront[0], lowerRightFront[1]);
  line(lowerLeftBack[0], lowerLeftBack[1], lowerLeftFront[0], lowerLeftFront[1]);
}

