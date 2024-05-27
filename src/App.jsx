import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import { AuthProvider } from "./context/Auth";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import Loading from "./pages/loading";
import AllProductsPage from "./pages/AllProductsPage";
import ProductPage from "./pages/ProductPage";
export default function App() {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="signUp" element={<SignUpPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="forgotPassword" element={<ForgetPasswordPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="allProducts" element={<AllProductsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
