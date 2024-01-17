import styled from "styled-components";

export const StyledProductCard = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    height: 346px;
    border: 2px solid var(--color-grey-100);
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
        border-color: var(--color-primary);
        transform: scale(1.1);
        transition: 0.5s;
    }
`;

export const StyledProductFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: var(--color-grey-200);

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const StyledInformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 2rem 1rem 1.2rem 1rem;

    h4 {
        font-size: 1.125rem;
        color: var(--color-grey-600);
        font-weight: 700;
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: (--color-grey-300);
    }

    span {
        font-size: 0.875rem;
        color: var(--color-primary);
        font-weight: 600;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        border-radius: 8px;
        width: 106px;
        background-color: var(--color-grey-400);
        color: var(--color-white);
        font-weight: 600;
        font-size: 0.875rem;
        transition: 0.5s;

        &:hover {
            background-color: var(--color-primary);
            transition: 0.5s;
            color: var(--color-white);
        }
    }
`;
