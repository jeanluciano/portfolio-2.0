import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'

const Loader = styled.div`
  background-color: #1f1c7d;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextWrap = styled.div`
  margin: 15px;
  width:50%;
`

export default () => (
  <Loader>
    <TextWrap>
      <h3>
        Born and raised in Puerto Rico. Grew up in Chicago. I grew interested in software
        development after writing scripts for PSP as a teenager. I am a fullstack developer with an
        affinity with the frontend and UX/UI design.
      </h3>
      <p>
        I have experience developing and designing both web app and mobile apps. I strive to write
        clean code that is performant. I am a huge fan of decentralization of the internet and new
        emerging technologies.
      </p>
      <p>
        One of the main reasons I love software development is its infinitely high learning curve. I
        really enjoy learning new things be it ways to make my code more scalable and performant,
        new CSS tricks or, any way which helps me express myself thru the computer.
      </p>
    </TextWrap>
  </Loader>
)
