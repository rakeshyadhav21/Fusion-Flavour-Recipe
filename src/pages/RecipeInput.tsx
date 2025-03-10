import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Loader2, UtensilsCrossed , Clock, Users, Flame } from 'lucide-react';

const RecipeInput = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    wordCount: '500',
    cuisine: '',
    cookingTime: '',
    servings: '',
    difficulty: 'medium',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/recipe/generated-123');
    }, 20000);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <UtensilsCrossed className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Create Your Recipe</h1>
          <p className="text-gray-600 mt-2">Let AI create a mouthwatering recipe inspired by your ideas!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Recipe Topic</label>
            <input type="text"  value={formData.topic} 
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Cuisine Type</label>
              <select value={formData.cuisine} onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none">
                <option value="" disabled>Select cuisine</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Cooking Time</label>
              <input type="text" value={formData.cookingTime}
                onChange={(e) => setFormData({ ...formData, cookingTime: e.target.value })}
                className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none" />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Servings</label>
              <input type="number" placeholder="e.g., 4" min="1" value={formData.servings}
                onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Difficulty</label>
              <select value={formData.difficulty} onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-green-300 outline-none">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div> */}

          <button type="submit" disabled={isLoading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center">
            {isLoading ? (<><Loader2 className="h-5 w-5 animate-spin mr-2" /> Generating Recipe...</>) : ('Generate Recipe')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeInput;