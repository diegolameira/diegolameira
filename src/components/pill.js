import styled from 'styled-components';

export default styled.span.attrs(({ theme: { primary } }) => ({
  highlightColor: primary
}))`
  padding: 10px 16px;
  display: inline-block;
  margin: 0 8px 8px 0;
  border: 1px solid;
  border-radius: 10000px;
  cursor: pointer;
  border-color: ${({ selected, highlightColor }) =>
    !selected ? 'rgba(0, 0, 0, 0.2)' : highlightColor};
  color: ${({ selected, highlightColor }) =>
    !selected ? 'rgba(0, 0, 0, 1)' : highlightColor};

  &.small {
    padding: 0;
    cursor: default;
    border: 0;
    font-size: 0.8em;
  }
`;
