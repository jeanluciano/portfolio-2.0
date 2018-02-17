import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'

const Loader = styled.div`
  background-color: #1f1c1d;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HomeTitle = styled.h1`
  color: #feffff;
`
const HomeSub = styled.h1`
  color: #feffff;
`
export default withSiteData(() => (
  <div>
    <Loader>
      <HomeTitle>Jean Luciano</HomeTitle>
      <HomeSub>Fullstack Web Developer</HomeSub>
    </Loader>
  </div>
))
