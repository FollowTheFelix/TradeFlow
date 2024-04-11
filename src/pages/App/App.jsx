import { useState, useEffect } from "react";

import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import { index } from "../../utilities/items-api"

import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage";
import CreateItemPage from "../CreateItemPage/CreateItemPage";

import ProfilePage from "../ProfilePage/ProfilePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [categories, setCategories] = useState([
    { name: "Consumer Goods", path: "categories/consumergoods" },
    {
      name: "Technology and Electronics",
      path: "categories/technologyelectronics",
    },
    { name: "Fashion and Apparel", path: "categories/fashionapparel" },
    { name: "Home and Garden", path: "categories/homegarden" },
    { name: "Health and Wellness", path: "categories/healthwellness" },
  ]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
      async function getProducts() {
          try {
              const products = await index();
              setProducts(products);
          } catch (error) {
              console.log("Error fetching products:", error);
          }
      }
      getProducts();
  }, []);


  // let { categoryName } = useParams();

  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <>
      <>
        <main className="App">
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route path="/" element={<HomePage products={products}/>} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/:categoryName" element={<CategoryPage products={products}/>} />
              <Route path="/:categoryName/:itemId" element={<ItemDetailsPage products={products}/>} />
          </Routes>
          {user ? (

            <>
            <Routes>
              <Route path="/create" element={<CreateItemPage />} />
              <Route path="/cart" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
             <Route path="/profile" element={<ProfilePage user={user} />}></Route>

            </Routes>
            </>
          ) : (
            <>
              <>{isRootPath && <AuthPage setUser={setUser} />}</>
          </>

          )}
        </main>
      </>
      <Routes>
      </Routes>
    </>
  );
}
