import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import Carousel from "react-multi-carousel";
import { Container, Title, ContainerItens } from "../../containers/Register/styles.js";

import "react-multi-carousel/lib/styles.css";


export function CategoriesCarousel() { 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 690 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 690, min: 0 },
    items: 1,
  },
};


  return (
  <Container>
    <Title>Categorias</Title>

    <Carousel
      responsive={responsive}
      infinite={true}
      partialVisible={false}
      itemClass="carousel-item"
    >
      {categories.map(category => (
        <ContainerItens key={category.id} imageUrl={category.image_url}>
          {category.name}
        </ContainerItens>
      ))}
    </Carousel>
  </Container>
);

}
