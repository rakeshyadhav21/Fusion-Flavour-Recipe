import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChefHat, Share2, Edit, Save, Clock, Users, Utensils } from 'lucide-react';
import TextToSpeechGoogle from '../components/TextToSpeechGoogle';

const RecipeOutput = () => {
  const { id } = useParams();

  const recipe = {
    title: "Vegan Chocolate Cake",
    description: "A rich and moist vegan chocolate cake that's perfect for any occasion.",
    image: "https://source.unsplash.com/random/1200x800?chocolate+cake",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: 8,
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 teaspoons baking soda",
      "1 teaspoon salt",
      "2 cups warm water",
      "2 teaspoons vanilla extract",
      "2/3 cup vegetable oil",
      "2 teaspoons vinegar"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and line a 9-inch cake pan with parchment paper",
      "In a large bowl, sift together flour, sugar, cocoa powder, baking soda, and salt",
      "Add warm water, vanilla extract, vegetable oil, and vinegar to the dry ingredients",
      "Mix until the batter is smooth and well combined",
      "Pour the batter into the prepared cake pan",
      "Bake for 30-35 minutes, or until a toothpick inserted comes out clean",
      "Let cool completely before frosting",
      "Enjoy your delicious vegan chocolate cake!"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-green-600" /> {recipe.title}
            </h1>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600">
                <Edit className="h-4 w-4" /> Edit
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-500 text-white flex items-center gap-2 hover:bg-green-600">
                <Save className="h-4 w-4" /> Save
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-500 text-white flex items-center gap-2 hover:bg-gray-600">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>
          </div>

          <TextToSpeechGoogle content={recipe.description} />

          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border">
              <Clock className="h-6 w-6 text-green-600 mx-auto" />
              <p className="text-sm font-medium">Prep Time</p>
              <p className="text-lg font-semibold">{recipe.prepTime}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
              <Utensils className="h-6 w-6 text-green-600 mx-auto" />
              <p className="text-sm font-medium">Cook Time</p>
              <p className="text-lg font-semibold">{recipe.cookTime}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border">
              <Users className="h-6 w-6 text-green-600 mx-auto" />
              <p className="text-sm font-medium">Servings</p>
              <p className="text-lg font-semibold">{recipe.servings}</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{recipe.description}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-2">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeOutput;
