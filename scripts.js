// Write your JavaScript code here.
// Remember to pay attention to page loading!
const takeOff = document.getElementById('takeoff');
const flightStatus = document.getElementById('flightStatus');
const shuttleBackground = document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
let spaceShuttleHeightNumber = parseInt(spaceShuttleHeight.textContent);
const rocket = document.getElementById('rocket');
const land = document.getElementById('landing');
const abort = document.getElementById('missionAbort');
const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');
let rocketPosX = 0;
let rocketPosY = 0;
let altitude = 0;

function takeOffShuttle() {
  const readyForTakeoff = window.confirm(
    'Confirm that the shuttle is ready for takeoff.'
  );
  if (readyForTakeoff) {
    flightStatus.textContent = 'Shuttle in flight.';
    shuttleBackground.style.backgroundColor = 'blue';
    rocketPosY += 10;
    altitude += 10000;
    spaceShuttleHeight.textContent = altitude;
  }
}

function landShuttle() {
  window.alert('The shuttle is landing. Landing gear engaged.');
  flightStatus.textContent = 'The shuttle has landed.';
  shuttleBackground.style.backgroundColor = 'green';
  spaceShuttleHeightNumber = 0;
  spaceShuttleHeight.textContent = spaceShuttleHeightNumber;
}

function abortMission() {
  const confirmAbort = window.confirm(
    'Confirm that you want to abort the mission.'
  );
  if (confirmAbort) {
    flightStatus.textContent = 'Mission aborted.';
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeightNumber = 0;
    spaceShuttleHeight.textContent = spaceShuttleHeightNumber;
  }
}

// rocket.style.position = 'absolute'

function moveUp() {
  rocketPosY += 10;
  rocket.style.marginBottom = rocketPosY + 'px';
  altitude += 10000;
  spaceShuttleHeight.textContent = altitude;
}

function moveDown() {
  if (altitude > 0) {
    rocketPosY -= 10;
    rocket.style.marginBottom = rocketPosY + 'px';
    altitude -= 10000;
    spaceShuttleHeight.textContent = altitude;
  }
}

function moveRight() {
  rocketPosX += 10;
  rocket.style.marginLeft = rocketPosX + 'px';
}

function moveLeft() {
  rocketPosX -= 10;
  rocket.style.marginLeft = rocketPosX + 'px';
}

takeOff.addEventListener('click', takeOffShuttle);
land.addEventListener('click', landShuttle);
abort.addEventListener('click', abortMission);
right.addEventListener('click', moveRight);
left.addEventListener('click', moveLeft);
up.addEventListener('click', moveUp);
down.addEventListener('click', moveDown);
