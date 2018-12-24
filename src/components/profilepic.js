import styled from 'styled-components';

export default styled.img.attrs(({ url }) => ({
  src: url || '/profilepic.jpg'
}))`
  width: 100%;
  max-width: 180px;
  border-radius: 10000px;
  overflow: hidden;
`;
