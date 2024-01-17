import { CartButton, StyledLogoAndCartContainer } from "./style";
import Logo from "../../../assets/logo.svg";
import CartIcon from "../../../assets/cart.svg";

export const LogoAndCart = ({ setIsOpen, insideCart }) => {
    return (
        <StyledLogoAndCartContainer>
            <img
                src={Logo}
                alt="Logo Burguer Kenzie, sendo a palavra Burguer na cor preta e em tamanho maior, e a a palavra Kenzie na cor vermelha"
            />
            <CartButton onClick={() => setIsOpen(!false)}>
                <img
                    src={CartIcon}
                    alt="Ícone bidimensional de um carrinho de compras de supermercado na cor cinza claro"
                />
                <span>{insideCart.length}</span>
            </CartButton>
        </StyledLogoAndCartContainer>
    );
};
