import { useState } from "react";
// import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
// import ProductItemComponent from "../components/ui/ProductItemComponent";

const ProductPageComponentImageSection = (props) => {
  const { productImage, product } = props;
  const [selectedImage, setSelectedImage] = useState(productImage);

 
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product__images_section  flex gap-10  ">
      <div className="product__images   flex flex-col gap-2 px-3 py-2">
        <img
          onClick={() => handleImageClick(product.image)}
          className=" m-auto   my-4  w-20 max-w-full cursor-pointer object-cover"
          src={product.image}
          alt={product.title}
        />
        <img
          onClick={() => handleImageClick(product.image)}
          className=" m-auto  my-4 w-20 max-w-full cursor-pointer object-cover"
          src={product.image}
          alt={product.title}
        />
        <img
          onClick={() => handleImageClick(product.image)}
          className=" m-auto  my-4 w-20 max-w-full cursor-pointer object-cover"
          src={product.image}
          alt={product.title}
        />
        <img
          onClick={() => handleImageClick(product.image)}
          className=" m-auto  my-4 w-20 max-w-full cursor-pointer object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>

      <span>
        <img
          className="Product__Selected__image     "
          src={selectedImage}
          alt="product title "
        />
      </span>
    </div>
  );
};

export default ProductPageComponentImageSection;
