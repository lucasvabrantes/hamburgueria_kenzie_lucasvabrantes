import { toast } from "react-toastify";
import {
    StyledInformationsContainer,
    StyledProductCard,
    StyledProductFigure,
} from "./style";
import { useEffect } from "react";

export const ProductCard = ({
    id,
    name,
    category,
    price,
    img,
    insideCart,
    setInsideCart,
    products,
}) => {
    const addToCart = (id) => {
        const verifyIfItWasAdded = insideCart.some(
            (element) => element.id === id
        );

        if (verifyIfItWasAdded) {
            return toast.error("Item já adicionado ao carrinho!");
        }

        const newCartArray = products.filter((prod) => prod.id === id);

        const newInsideCart = [...insideCart, newCartArray[0]];

        setInsideCart(newInsideCart);

        toast.success("Item adicionado com sucesso!");
    };

    return (
        <StyledProductCard>
            <StyledProductFigure>
                <img src={img} alt={name} />
            </StyledProductFigure>
            <StyledInformationsContainer>
                <h4>{name}</h4>
                <p>{category}</p>
                <span>
                    {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
                <button
                    onClick={() => {
                        addToCart(id);
                    }}
                >
                    Adicionar
                </button>
            </StyledInformationsContainer>
        </StyledProductCard>
    );
};
