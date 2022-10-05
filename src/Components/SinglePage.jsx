import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

function SinglePage() {
  const { token,handleCarting } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const fetching = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://calm-beyond-95466.herokuapp.com/api/Product/${id}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetching(id);
  }, [id]);
  if (loading) {
    return <h1>...Loading</h1>;
  }
  const handleCart = (id,name,image_url,price)=>{
    handleCarting(id,name,image_url,price);

  }
  return (
    <div>
      <h1>Single Product</h1>
      <div>
        {
          <div key={data.id}>
            <img src={data.image_url} alt="Clothing" />
            <h1>{data.name}</h1>
            <h3>Price : {data.price}</h3>
            <h3>Category : {data.category}</h3>
            <h4>Color : {data.color}</h4>
            <button
              onClick={() => {
                token.token
                  ? handleCart(data.id,data.name,data.image_url,data.price)
                  : navigate("/Login");
                  // :handleCart(data.id,data.name,data.image_url,data.price)
              }}
            >
              Add To Cart
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default SinglePage;
