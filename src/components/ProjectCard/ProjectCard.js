import React from 'react'
import styled from 'styled-components'

import TagList from './TagList'
import ButtonGroup from './ButtonGroup'

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  align-items: flex-start;
  padding: 30px;

  > * {
    margin: 10px 0;
  }

  > p {
    min-height: 110px;
    line-height: 1.4;
  }

`

const ImageWrapper = styled.div`
  display: flex;
  flex: 7;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  object-fit: cover;
`

const ProjectCard = ({
  title = 'Project title',
  desc = 'Project description',
  tags = [],
  demo = '',
  source = '',
  imageUrl
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="https://developers.google.com/youtube/images/youtube_home_page_player_api_720.png" />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>I decwill explain color types, specific keywords, and when to use which along with use-cases and examples. Disclaimer: this is not an article about color theory.</p>
        <TagList />
        <ButtonGroup />
      </Content>
    </Wrapper>
  )
}

export default ProjectCard