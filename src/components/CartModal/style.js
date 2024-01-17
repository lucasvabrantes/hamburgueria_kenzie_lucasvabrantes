import styled from "styled-components";

export const StyledModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
`;

export const StyledModalBox = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 20px;
    height: 411px;
    background-color: var(--color-grey-200);
    border-radius: 5px;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--color-primary);
    border-radius: 5px 5px 0px 0px;

    span {
        color: var(--color-white);
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 1.125rem;
    }

    button {
        width: 10px;
        height: 10px;
        background: transparent;

        img {
            color: rgba(255, 255, 255, 0.5);
        }
    }
`;

export const StyledModalContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px;

    ul {
        width: 100%;
        height: 180px;
        overflow-y: auto;
    }

    > span {
        width: 100%;
        background-color: var(--color-grey-100);
        height: 2px;
        margin: 12px 0px;
    }
`;
