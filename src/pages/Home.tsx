import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, UtensilsCrossed , Clock, Users, Heart, Utensils, Search, Timer, Globe, Flame } from 'lucide-react';

const Home = () => {
  // Featured recipes data
  // const featuredRecipes = [
  //   {
  //     id: 1,
  //     title: "Caramelized Banana Pancakes",
  //     description: "Fluffy pancakes topped with golden caramelized bananas and maple syrup.",
  //     image: "https://www.chocolatesandchai.com/wp-content/uploads/2022/06/Caramelized-Bananas-Pancakes-8-1024x1536.jpg",
  //     prepTime: "15 mins",
  //     servings: 4,
  //     likes: 234,
  //     author: "Emma Davis"
  //   },
  //   {
  //     id: 2,
  //     title: "Mediterranean Grilled Salmon",
  //     description: "Fresh salmon fillet with Mediterranean herbs and lemon.",
  //     image: "https://coupleinthekitchen.com/wp-content/uploads/2020/07/Grilled-Salmon-and-Veggie-Kabobs-30-735x735.jpg",
  //     prepTime: "25 mins",
  //     servings: 2,
  //     likes: 189,
  //     author: "Michael Chen"
  //   },
  //   {
  //     id: 3,
  //     title: "Rustic Apple Tart",
  //     description: "Beautiful free-form tart with fresh apples and caramel drizzle.",
  //     image: "https://fthmb.tqn.com/0ANzjK8sv8O_Ax-2TiQ_rw9IxIY=/960x0/filters:no_upscale()/109269410-1-589cacfb3df78c4758187107.jpg",
  //     prepTime: "40 mins",
  //     servings: 8,
  //     likes: 156,
  //     author: "Sarah Johnson"
  //   }
  // ];

  const categories = [
    { name: "Breakfast", icon: <Timer />, image: "https://th.bing.com/th/id/OIP.4T1FNKyykZedXvEzFsJtyQHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", description: "Start your day right", count: 128 },
    { name: "Main Course", icon: <Utensils />, image: "https://th.bing.com/th/id/OIP.nTRx5Z30N-rz9YLWDr_lOQHaE8?rs=1&pid=ImgDetMain", description: "Hearty dinner ideas", count: 256 },
    { name: "Desserts", icon: <UtensilsCrossed  />, image: "https://blog.asaptickets.com/wp-content/uploads/2016/10/most-delicious-deserts-from-all-over-the-world-4-min.jpg", description: "Sweet treats", count: 164 },
    { name: "Healthy", icon: <Heart />, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg", description: "Nutritious options", count: 192 },
    { name: "Quick & Easy", icon: <Timer />, image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/mac-and-cheese-recipe-1.jpg", description: "Ready in 30 minutes", count: 145 },
    { name: "International", icon: <Globe />, image: "https://th.bing.com/th/id/OIP.-myuMXzezj3DDkA8z2o8rAHaE8?rs=1&pid=ImgDetMain", description: "Flavors from around the world", count: 218 },
    // { name: "Vegetarian", icon: <Sparkles />, image: "https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=170667a&w=0&k=20&c=Gv5P0ARukE4Eo9g-9OOQA5O4cJKS9lA3Teg5R3u_6UU=", description: "Plant-based delights", count: 176 },
    // { name: "Trending", icon: <Flame />, image: "https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTkxNjgxNzExMTY2MjAzNTU1/malay-laksa-sh.jpg", description: "Popular right now", count: 95 }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-20 text-center">
        <UtensilsCrossed  className="h-20 w-20 mx-auto mb-4 animate-bounce" />
        <h1 className="text-5xl font-bold">Embark on Your Culinary Journey Today</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Discover, create, and share amazing recipes with our AI-powered platform.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/create" className="px-6 py-3 bg-black text-white-500 rounded-lg shadow-lg hover:bg-gray-200 flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> Create Recipe
          </Link>
          {/* <Link to="/recipes" className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 flex items-center gap-2">
            <Search className="h-5 w-5" /> Browse Recipes
          </Link> */}
        </div>
      </section>

      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center">Browse Recipe Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {categories.map((category) => (
            <Link to={`/recipes?category=${category.name.toLowerCase()}`} key={category.name} className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 flex flex-col items-center text-center">
              <img src={category.image} alt={category.name} className="h-32 w-full object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
              <span className="mt-2 text-gray-700 font-medium">{category.count} recipes</span>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center">Featured Recipes</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {featuredRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
              <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{recipe.description}</p>
                <div className="mt-3 flex justify-between text-sm text-gray-700">
                  <span><Clock className="inline h-4 w-4" /> {recipe.prepTime}</span>
                  <span><Users className="inline h-4 w-4" /> {recipe.servings} servings</span>
                </div>
                <div className="mt-2 flex justify-between border-t pt-2 text-gray-600 text-sm">
                  <span>By {recipe.author}</span>
                  <span><Heart className="inline h-4 w-4 text-red-500" /> {recipe.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* <section className="py-16 text-center">
        <div className="bg-red-500 text-white py-12 px-8 rounded-lg max-w-2xl mx-auto shadow-lg">
          <ChefHat className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Ready to Start Cooking?</h2>
          <p className="mt-4">Join our community and share your culinary creations today.</p>
          <Link to="/sign-up" className="mt-6 inline-block bg-white text-red-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 font-medium">
            <Sparkles className="h-5 w-5 inline" /> Get Started - It's Free
          </Link>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
