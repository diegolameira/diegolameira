import styled from 'styled-components';

export default styled.span`
  padding: 10px 16px;
  display: inline-block;
  margin: 4px;
  border: 1px solid;
  border-radius: 10000px;
  cursor: pointer;
  border-color: ${({ selected }) =>
    !selected ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 0, 1)'};
`;
