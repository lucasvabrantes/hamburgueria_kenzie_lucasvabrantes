import styled from "styled-components";

export const StyledCartTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 7.5rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 2rem;

        span:first-child {
            font-size: 0.875rem;
            color: var(--color-grey-600);
            font-weight: 600;
        }

        span:last-child {
            font-size: 0.875rem;
            color: var(--color-grey-300);
            font-weight: 600;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        border-radius: 8px;
        width: 100%;
        background-color: var(--color=-grey-100);
        color: var(--color-grey-300);
        font-weight: 600;
        font-size: 1rem;
        transition: 0.5s;

        &:hover {
            background-color: var(--color-primary);
            transition: 0.5s;
            color: var(--color-white);
        }
    }
`;
