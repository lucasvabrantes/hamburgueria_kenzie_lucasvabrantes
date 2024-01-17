import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { useEffect, useState } from "react";
import { ProductsList } from "./components/ProductsList/index";
import { CartModal } from "./components/CartModal";
import { StyledContainer } from "./styles/grid";
import { api } from "./services/api";

import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
    const localStorageInsideCart = localStorage.getItem("@CARTITEMS");
    const [products, setProducts] = useState([]);
    const [insideCart, setInsideCart] = useState(
        localStorageInsideCart ? JSON.parse(localStorageInsideCart) : []
    );
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem("@CARTITEMS", JSON.stringify(insideCart));
    }, [insideCart]);

    useEffect(() => {
        const apiProducts = async () => {
            try {
                const { data } = await api.get("/products", {
                    params: {
                        name_like: search,
                    },
                });
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        apiProducts();
    }, [search]);
    return (
        <>
            <GlobalStyle />
            {isOpen ? (
                <CartModal
                    setIsOpen={setIsOpen}
                    insideCart={insideCart}
                    setInsideCart={setInsideCart}
                />
            ) : null}

            <Header
                search={search}
                setIsOpen={setIsOpen}
                insideCart={insideCart}
                setSearch={setSearch}
            />
            <StyledContainer>
                <ProductsList
                    setInsideCart={setInsideCart}
                    products={products}
                    insideCart={insideCart}
                    setIsOpen={setIsOpen}
                    isLoading={isLoading}
                />
            </StyledContainer>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                transition={Flip}
            />
        </>
    );
};
