import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-200);
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1368px;
    background-color: var(--color-grey-200);
    padding: 1rem 0.8rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
