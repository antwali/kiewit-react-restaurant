import { Food, foods } from "./food";

export function App() {
  function renderFood(food: Food) {
    return (
      <div key={food.id} className="m-4 p-2 bg-cyan-100 w-52 border shadow-md">
        <h2 className="text-xl font-bold ">{food.name}</h2>
        <p>{food.description}</p>
        <p className="font-bold">{food.price}</p>
      </div>
    );
  }

  return (
    <>
      <h1> Menu</h1>
      <div className="flex flex-wrap">{foods.map(renderFood)}</div>
    </>
  );
}
