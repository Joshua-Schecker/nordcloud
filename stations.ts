const stations = [
//[x, y, reach]
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12]
]

function findOptimalStation(x: number, y: number, stations: number[][]): string{
  const stationsWithPower: number[][] = stations
  .map( station => station.concat([calculatePower(station, [x,y])]))
  .sort((a, b)=>{
    return b[3] - a[3]
  })
  const optimalStation = stationsWithPower[0];
  if(optimalStation[3] < 0){
    return `No link station within reach for point ${x},${y}`
  }
  return `Best link station for point ${x},${y} is ${optimalStation[0]},${optimalStation[1]} with power ${optimalStation[3]}`;
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
