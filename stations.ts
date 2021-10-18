const stations = [
//[x, y, reach]
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
]
type station =  {
  x: number,
  y: number,
  reach: number,
  power: number
}
function findOptimalStation(x: number, y: number, stations: number[][]): string{
  const stationsWithPower: station[] = stations
  .map( station => ({x: station[0], y: station[1], reach: station[2], power: calculatePower(station, [x,y])}))
  .sort((a, b)=>{
    return b.power - a.power
  })
  const optimalStation = stationsWithPower[0];
  if(optimalStation.power <= 0){
    return `No link station within reach for point ${x},${y}`
  }
  return `Best link station for point ${x},${y} is ${optimalStation.x},${optimalStation.y} with power ${optimalStation.power}`;
}

function calculatePower(station :number[], point :number[]): number {
 const xDifference = station[0] - point[0];
 const yDifference = station[1] - point[0];
 const distance = Math.sqrt(xDifference**2 + yDifference**2);
 const absolutePower = station[2] - distance;
 if(absolutePower < 0){
   // point not in reach
   return -1
 }
 return absolutePower**2

}

console.log(findOptimalStation(0,0, stations));
console.log(findOptimalStation(100, 100, stations));
console.log(findOptimalStation(15,10, stations));
console.log(findOptimalStation(18, 18, stations));
