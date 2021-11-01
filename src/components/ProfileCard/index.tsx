import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

type socialLinks = {
  title: string
  url: string
}

type Props = {
  name: string
  role: string
  photo: string
  socialLinks: socialLinks[]
  description: string
  alt: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  photo,
  socialLinks,
  description,
  alt
}) => (
  <S.Card key={name}>
    <S.Image src={photo} alt={alt} loading="lazy" />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.url}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
