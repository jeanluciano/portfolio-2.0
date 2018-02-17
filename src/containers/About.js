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
export default () => (
  <Loader>
    <h3>
      Born and raised in Puerto Rico. Grew up in Chicago. I grew interested in software development
      after writing scripts for PSP as a teenager. I am a fullstack developer with an affinity with
      the frontend and UX/UI design.
    </h3>
  </Loader>
)
