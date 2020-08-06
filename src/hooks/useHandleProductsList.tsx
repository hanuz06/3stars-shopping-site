import React, { useEffect, useState } from "react";

const useHandleProductsList = () => {
  const [productList, setProductsList] = useState<any>([
    {
      id: 1,
      title: "Google Pixel - Black",
      img: "./pic/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      inCart: false,
      count: 0,
      total: 0,
    },
  ]);
  const [foundProductsList, setFoundProductsList] = useState<any>([
    {
      id: 1,
      title: "Google Pixel - Black",
      img: "./pic/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      inCart: false,
      count: 0,
      total: 0,
    },
    {
      id: 2,
      title: "Google Pixel - Black",
      img: "./pic/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.",
      inCart: false,
      count: 0,
      total: 0,
    },
  ]);

  const handleSearch = (word: string): void => {
    const result = productList.filter((product: any) => {
      product.title.contains(word);
    });

    if (result) {
      setFoundProductsList(result);
    } else {
      setFoundProductsList(productList);
    }
  };
  console.log('dddddd ', handleSearch)
  return { foundProductsList, setProductsList, handleSearch };
};

export default useHandleProductsList;
