export type MealTime = "breakfast" | "lunch" | "dinner";

export const MEAL_TIMES: Record<MealTime, { title: string }> = {
  breakfast: {
    title: "Breakfast 🍳",
  },
  lunch: {
    title: "Lunch 🍱",
  },
  dinner: {
    title: "Dinner 🍲",
  },
}; 