import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, Clock, Users, Heart, X } from 'lucide-react';

const Recipes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTime, setSelectedTime] = useState<string>('Any Time');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Any Difficulty');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShowClearButton(searchQuery.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
  }, []);

  const categories: string[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan', 'Vegetarian'];
  const timeFilters: string[] = ['Any Time', 'Quick (< 15 min)', 'Medium (15-30 min)', 'Long (> 30 min)'];
  const difficultyFilters: string[] = ['Any Difficulty', 'Easy', 'Medium', 'Hard'];

  interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    prepTimeMinutes: number;
    servings: number;
    likes: number;
    author: string;
    category: string;
    difficulty: string;
  }

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Vegan Chocolate Cake",
      description: "A rich and moist vegan chocolate cake perfect for any occasion.",
      image: "https://bing.com/th?id=OSK.2dde9a50fbc2df20370aacbf58c64076",
      prepTime: "45 mins",
      prepTimeMinutes: 45,
      servings: 8,
      likes: 124,
      author: "Sarah Johnson",
      category: "Dessert",
      difficulty: "Medium"
    }
  ];

  const handleClearSearch = () => setSearchQuery('');
  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTime('Any Time');
    setSelectedDifficulty('Any Difficulty');
  };

  const toggleFilter = (filterName: string) => setActiveFilter(activeFilter === filterName ? null : filterName);
  const getActiveFiltersCount = (): number => [selectedCategory, selectedTime, selectedDifficulty]
    .filter(f => f !== 'All' && f !== 'Any Time' && f !== 'Any Difficulty').length;

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesTime = selectedTime === 'Any Time' || (selectedTime === 'Quick (< 15 min)' && recipe.prepTimeMinutes < 15) || (selectedTime === 'Medium (15-30 min)' && recipe.prepTimeMinutes >= 15 && recipe.prepTimeMinutes <= 30) || (selectedTime === 'Long (> 30 min)' && recipe.prepTimeMinutes > 30);
    const matchesDifficulty = selectedDifficulty === 'Any Difficulty' || recipe.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesTime && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <ChefHat className="h-16 w-16 text-yellow-500 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Discover Amazing Recipes</h1>
        <p className="text-gray-600 mt-2">Explore delicious recipes created by our community.</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-full shadow-lg p-3 flex items-center border border-gray-300">
        <Search className="h-5 w-5 text-gray-500 ml-3" />
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2 text-gray-800 outline-none"
        />
        {showClearButton && <X className="h-5 w-5 text-gray-500 cursor-pointer mr-3" onClick={handleClearSearch} />}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg border ${selectedCategory === category ? 'bg-yellow-500 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredRecipes.length > 0 ? filteredRecipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {recipe.prepTime}</span>
                <span className="flex items-center"><Users className="h-4 w-4 mr-1" /> {recipe.servings} servings</span>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{recipe.difficulty}</span>
                <span className="flex items-center text-gray-700"><Heart className="h-4 w-4 mr-1" /> {recipe.likes}</span>
              </div>
            </div>
          </Link>
        )) : <p className="text-center text-gray-600 col-span-full">No recipes found</p>}
      </div>
    </div>
  );
};

export default Recipes;
