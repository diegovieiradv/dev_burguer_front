import { useEffect, useState } from "react";
import { api } from "../../services/api.js";
import Carousel from "react-multi-carousel";
import { Container } from "../../containers/Register/styles.js";


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
      itens: 4,
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
        <ContainerItens key={category.id}>
          {category.name}
        </ContainerItens>
      ))}
    </Carousel>
  </Container>
);

}
