import styled from "styled-components";

export const StyledCartProduct = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.2rem 1.2rem 1.2rem 0rem;
    figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        background-color: var(--color-grey-100);
        width: 82px;
        height: 80px;

        img {
            width: 55px;
            height: 53px;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;

        p {
            color: var(--color-grey-600);
            font-size: 1.125rem;
            font-weight: 700;
            margin-left: 0.5rem;
        }

        button {
            background: transparent;
        }
    }
`;
