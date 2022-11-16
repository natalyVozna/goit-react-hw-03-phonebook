import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  list-style: disc;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.6;
`;

export const Info = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 27px;
  color: var(--text);

  :first-child {
    color: var(--dark-green);
    margin-left: 0;
  }

  :last-child {
    color: var(--dark-gray);
  }
`;
