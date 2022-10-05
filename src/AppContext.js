import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const isAuth = true;
  const [token, setToken] = useState([]);
  const [cart, setCart] = useState([]);
  const handleCarting = (id, name, image_url, price) => {
        const data = {
            id: id,
            name : name,
            image : image_url,
            price: price,
            // Quantity : Number(1),
    
        }
        setCart([...cart,data]);
        

  };
  const deleteCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };
  const toggleAuth = async (email, password) => {
    try {
      const data1 = {
        email: email,
        password: password,
      };
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(data1),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data12 = await res.json();
      console.log(data12);
      setToken(data12);
    } catch (error) {
      console.log("err");
    }
  };
  const Logout = () => {
    setToken([]);
    alert("You have been logged out");
  };
  return (
    <AppContext.Provider
      value={{
        isAuth,
        toggleAuth,
        token,
        Logout,
        handleCarting,
        cart,
        deleteCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
