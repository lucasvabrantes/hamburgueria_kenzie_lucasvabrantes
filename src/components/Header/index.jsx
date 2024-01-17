import { StyledHeader, StyledHeaderContainer } from "./style";
import { LogoAndCart } from "./LogoAndCart/index";
import { InputSearch } from "./InputSearch";

export const Header = ({ setIsOpen, insideCart, setSearch, search }) => {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <LogoAndCart setIsOpen={setIsOpen} insideCart={insideCart} />
                <InputSearch
                    callback={(inputSearch) => setSearch(inputSearch)}
                />
            </StyledHeaderContainer>
        </StyledHeader>
    );
};
