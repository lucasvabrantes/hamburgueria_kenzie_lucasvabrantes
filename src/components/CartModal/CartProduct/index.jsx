import Bucket from "../../../assets/bucket.svg";
import { toast } from "react-toastify";
import { StyledCartProduct } from "./style";

export const CartProduct = ({ name, id, img, insideCart, setInsideCart }) => {
    const removeFromCart = (id) => {
        const newCartArray = insideCart.filter(
            (cartItem) => cartItem.id !== id
        );

        setInsideCart(newCartArray);

        toast.success("Item removido com sucesso!");
    };

    return (
        <StyledCartProduct>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div>
                <p>{name}</p>
                <button onClick={() => removeFromCart(id)}>
                    <img
                        src={Bucket}
                        alt="Ícone de lixeira que funciona para deletar um item do carrinho de compras"
                    />
                </button>
            </div>
        </StyledCartProduct>
    );
};
