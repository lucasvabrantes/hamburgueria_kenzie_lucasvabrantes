import styled from "styled-components";

export const StyledHeaderInputSearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    padding: 3px 8px 3px 15px;
    border: 2px solid var(--color-grey-100);
    border-radius: 8px;

    &:focus-within {
        border-color: var(--color-grey-600);
    }

    input {
        background: transparent;
        height: 100%;
        width: 100%;
        border: none;
        font-size: 1rem;

        ::placeholder {
            color: var(--color--grey-100);
            font-size: 1rem;
            font-weight: 400;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 40px;
        background-color: var(--color-primary);
        border-radius: 8px;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
            opacity: 0.5;
        }

        img {
            width: 13px;
            height: 16px;
        }
    }

    @media (min-width: 768px) {
        max-width: 365px;
    }
`;
