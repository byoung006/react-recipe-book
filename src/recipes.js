const energy_balls = {
  id: "energy_balls",
  dishName: "Energy Balls",
  recipe: {
    prepTime: 30,
    cookTime: 30,
    ingredients: ["1 tsp salt", "2 tsp sugar", "38 tsp of flower"],
    instructions: [
      "turn heat on to high",
      "put all dry ingredients into a bowl",
      "finish yo energy balls",
    ],
  },
};

const plum_dumplings = {
  id: "plum_dumplings",
  dishName: "Plum Dumplings",
  recipe: {
    prepTime: 60,
    cookTime: 30,
    ingredients: ["1 tsp salt", "2 tsp sugar", "38 tsp of flower"],
    instructions: [
      "turn heat on to high",
      "put all dry ingredients into a bowl",
    ],
  },
};

export const Categories = [
  {
    category: "Snacks",
    recipes: [energy_balls, plum_dumplings],
  }, {
    category: "Breakfast",
    recipes: [energy_balls],
  },
  // {
  //   category: "Breakfast",
  //   list: [
  //     {
  //       dishName: "Energy Balls",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Overnight Oats",
  //
  //       prepTime: 10,
  //     },
  //     {
  //       dishName: "Cloud Omelettes",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Eggwhite Waffles",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Power Oatmeal",
  //
  //       prepTime: 20,
  //     },
  //     {
  //       dishName: "Bryce's Hollendaise Sauce",
  //
  //       prepTime: 15,
  //     },
  //     {
  //       dishName: "",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       category: "Lunch",
  //       list: [
  //         {
  //           dishName: "Energy Balls",
  //
  //           prepTime: 30,
  //         },
  //         {
  //           dishName: "Curried Pasta Salad",
  //
  //           prepTime: 30,
  //         },
  //         {
  //           dishName: "Kimchi Grilled Cheese",
  //
  //           prepTime: 30,
  //         },
  //         {
  //           dishName: "5 Bean Soup",
  //
  //           prepTime: 30,
  //         },
  //         {
  //           dishName: "Glory Bowls",
  //
  //           prepTime: 30,
  //         },
  //         {
  //           dishName: "Waldorf Salad",
  //
  //           prepTime: 30,
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   category: "Dinner",
  //   list: [
  //     {
  //       dishName: "Mac & Cheese",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Spicy Peanut Soba",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Roasted Maple bacon Brussels",
  //
  //       prepTime: 30,
  //     },
  //     {
  //       dishName: "Kakuni Pork belly",
  //
  //       prepTime: 30,
  //     },
  //   ],
  // },
];
