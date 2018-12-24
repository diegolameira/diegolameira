import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class extends PureComponent {
  render() {
    const { sidebar, children } = this.props;
    return (
      <Wrapper>
        <Sidebar>{sidebar}</Sidebar>
        <Main>{children}</Main>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  @media screen and (max-width: 767px) {
    & > * {
      width: 100% !important;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 20px calc(50% - 364px);
  }

  @media screen and (min-width: 1024px) {
    padding: 20px calc(50% - 492px);
  }
`;

const Sidebar = styled.aside`
  width: 30%;
`;

const Main = styled.main`
  width: calc(70% - 20px);
`;
