import { StyledHeaderInputSearch } from "./style";
import SearchIcon from "../../../assets/searchIcon.svg";
import { useEffect, useRef, useState } from "react";

export const InputSearch = ({ search, callback }) => {
    const [userSearch, setUserSearch] = useState("");

    const searchButtonRef = useRef(null);

    useEffect(() => {
        const handleEnterButton = (event) => {
            if (event.key === "Enter") {
                searchButtonRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleEnterButton);

        return () => {
            window.removeEventListener("keydown", handleEnterButton);
        };
    });

    const handleSearch = () => {
        callback(userSearch);
    };
    return (
        <StyledHeaderInputSearch tabIndex={0}>
            <input
                value={search}
                onChange={(e) => {
                    setUserSearch(e.target.value);
                }}
                type="text"
                placeholder="Digitar Pesquisa"
            />
            <button ref={searchButtonRef} onClick={handleSearch}>
                <img
                    src={SearchIcon}
                    alt="Ícone de uma lupa, o qual pode ser clicado para efetuar pesquisa de acordo com o que foi digitado no campo"
                />
            </button>
        </StyledHeaderInputSearch>
    );
};
