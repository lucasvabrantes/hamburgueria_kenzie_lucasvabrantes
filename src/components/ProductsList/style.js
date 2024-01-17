import styled from "styled-components";

export const StyledProductsList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    height: 380px;
    overflow-x: auto;
    gap: 1.25rem;
    margin-top: 40px;
    margin-bottom: 50px;
    padding: 0px 20px;

    @media (min-width: 768px) {
        padding-top: 1.5rem;
        overflow-y: hidden;
        flex-wrap: wrap;
        height: 100%;
        justify-content: start;
        gap: 2.5rem;
    }
`;
