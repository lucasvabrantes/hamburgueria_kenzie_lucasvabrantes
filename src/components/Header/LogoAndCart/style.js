import styled from "styled-components";

export const StyledLogoAndCartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    margin-bottom: 0.5rem;

    img {
        width: 150px;
        height: 22.85px;
    }
`;

export const CartButton = styled.button`
    display: flex;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 40px;
    background: transparent;

    img {
        max-height: 25px;
        max-width: 25px;
        min-height: 25px;
        min-width: 25px;
        align-self: flex-end;
    }

    span {
        background-color: var(--color-primary);
        padding: 3px 5px;
        border: 1px solid var(--color-primary);
        border-radius: 8px;
        font-size: 0.875rem;
        color: var(--color-white);
        font-weight: 800;

        position: absolute;
        top: 0;
        right: 2px;
        z-index: 100;
    }

    @media (min-width: 768px) {
        margin-right: 10px;
    }
`;
