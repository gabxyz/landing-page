import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({
  title,
  questions,
  extraQuestionBool,
  extraQuestion,
  extraAnswer
}: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>
        <S.Questions>
          {questions.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>
        {extraQuestionBool && (
          <S.ExtraQuestion>
            <Heading lineBottom>{extraQuestion}</Heading>
            <div dangerouslySetInnerHTML={{ __html: extraAnswer }} />
          </S.ExtraQuestion>
        )}
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
