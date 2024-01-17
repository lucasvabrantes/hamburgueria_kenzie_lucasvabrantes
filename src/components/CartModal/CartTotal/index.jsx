import { StyledCartTotalContainer } from "./style";

export const CartTotal = ({ insideCart, setInsideCart }) => {
    const totalPrice = insideCart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    );

    return (
        <StyledCartTotalContainer>
            <div>
                <span>Total</span>
                <span>
                    {totalPrice.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </span>
            </div>
            <button onClick={() => setInsideCart([])}>Remover Todos</button>
        </StyledCartTotalContainer>
    );
};
