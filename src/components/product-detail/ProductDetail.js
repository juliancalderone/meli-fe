import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product-detail.scss";
import { getProductDetail } from "../../api/api";

function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams("/items/:id");
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES").format(price);
  };

  useEffect(() => {
    getProductDetail(id)
      .then((data) => {
        setProduct(data.item);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!product) return null;

  return (
    <div className="productDetail">
      <div className="container">
        <div className="content">
          <div className="description">
            <img src={product.picture} alt="Foto principal producto" />
            <h1 className="title">Descripción del producto</h1>
            <p className="text">{product.description}</p>
          </div>
          <div className="info">
            <div className="details">
              <div className="condition">
                {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {product.sold_quantity} vendidos
              </div>
              <h2 className="title">{product.title}</h2>
              <h1 className="price">
                $ {formatPrice(product.price.amount)}
                <span className="decimals">,{product.price.decimals}</span>
              </h1>
              <button className="button">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
