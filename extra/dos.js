const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i in foodSchedule) {
  const food = foodSchedule[i];
  const foodVegan = food.isVegan;

  if (!foodVegan) {
    food.name = fruits.pop();
    food.isVegan = true;
  }
}
console.log(fruits);
console.log(foodSchedule);
