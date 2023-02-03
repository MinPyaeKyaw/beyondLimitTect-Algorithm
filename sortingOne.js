const cpu = [
  { name: "i3", priority: 3 },
  { name: "i5", priority: 2 },
  { name: "i7", priority: 1 },
];
const ram = [
  { name: "4gb", priority: 3 },
  { name: "8gb", priority: 1 },
  { name: "16gb", priority: 2 },
];
const color = [
  { name: "white", priority: 1 },
  { name: "black", priority: 2 },
  { name: "gold", priority: 4 },
  { name: "grey", priority: 3 },
];
const result = [
  { name: "i3 - 4g - white", priority: 7 },
  { name: "i3 - 8g - white", priority: 5 },
];

const pcBuilder = (cpu, ram, color) => {
  return {
    name: `${cpu.name}-${ram.name}-${color.name}`,
    priority: cpu.priority + ram.priority + color.priority,
  };
};

let resultArr = [];

resultArr.push(pcBuilder(cpu[0], ram[1], color[1]));
resultArr.push(pcBuilder(cpu[2], ram[2], color[0]));

const sortResults = (results) => {
  for (let i = 0; i < results.length; i++) {
    for (let l = 0; l < results.length; l++) {
      if (results[l].priority > results[i].priority) {
        let temp = results[i];
        results[i] = results[l];
        results[l] = temp;
      }
    }
  }

  return results;
};

console.log(sortResults(resultArr));
