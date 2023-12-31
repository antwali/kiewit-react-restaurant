import { z } from "zod";
import ky from "ky";
import { Food, NewFood, foodSchema } from "../food.types";

export async function getFoods(): Promise<Food[]> {
  // TODO: What about errors?
  const foods = await ky("http://localhost:3001/foods").json();
  const foodResponseSchema = z.array(foodSchema);
  // If the JSON doesn't match the schema, we'll get a runtime error.
  return foodResponseSchema.parse(foods);
}

export async function getFood(foodId: number): Promise<Food> {
  // TODO: What about errors?
  const food = await ky("http://localhost:3001/foods/" + foodId).json();
  const foodResponseSchema = foodSchema;
  // If the JSON doesn't match the schema, we'll get a runtime error.
  return foodResponseSchema.parse(food);
}

export async function addFood(newFood: NewFood): Promise<Food> {
  const food = await ky
    .post("http://localhost:3001/foods", { json: newFood })
    .json();
  return food as Food;
}

export async function editFood(food: Food): Promise<Food> {
  const savedFood = await ky
    .put("http://localhost:3001/foods/" + food.id, { json: food })
    .json();
  return savedFood as Food;
}

export async function deleteFood(foodId: number): Promise<void> {
  await ky.delete("http://localhost:3001/foods/" + foodId);
}
