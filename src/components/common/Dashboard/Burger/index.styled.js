import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 5%;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.primaryDark : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
