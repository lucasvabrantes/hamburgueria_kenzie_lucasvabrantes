import { useEffect, useRef } from "react";
import {
    StyledModalBox,
    StyledModalContent,
    StyledModalHeader,
    StyledModalOverlay,
} from "./style";

import CloseBtn from "../../assets/closeButton.svg";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

// eslint-disable-next-line react/prop-types
export const CartModal = ({ setIsOpen, insideCart, setInsideCart }) => {
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutclick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                buttonRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <StyledModalOverlay role="dialog">
            <StyledModalBox ref={modalRef}>
                <StyledModalHeader>
                    <span>Carrinho de compras</span>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}>
                        <img src={CloseBtn} alt="Botão para fechar a janela" />
                    </button>
                </StyledModalHeader>
                <StyledModalContent>
                    <ul>
                        {insideCart.map((cartItem) => (
                            <CartProduct
                                key={cartItem.id}
                                {...cartItem}
                                insideCart={insideCart}
                                setInsideCart={setInsideCart}
                            />
                        ))}
                    </ul>

                    <span></span>
                    <CartTotal
                        insideCart={insideCart}
                        setInsideCart={setInsideCart}
                    />
                </StyledModalContent>
            </StyledModalBox>
        </StyledModalOverlay>
    );
};
