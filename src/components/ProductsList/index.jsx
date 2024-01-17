import { ProductCard } from "./ProductCard";
import { StyledProductsList } from "./style";

export const ProductsList = ({
    isLoading,
    products,
    setInsideCart,
    insideCart,
}) => {
    return isLoading ? (
        <p>Carregando produtos</p>
    ) : (
        <StyledProductsList>
            {products.map((product) => {
                return (
                    <ProductCard
                        key={product.id}
                        {...product}
                        products={products}
                        setInsideCart={setInsideCart}
                        insideCart={insideCart}
                    />
                );
            })}
        </StyledProductsList>
    );
};
