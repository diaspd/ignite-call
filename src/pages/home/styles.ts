import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  '@media (max-width: 864px)': {
    margin: '$20 0',
    flexDirection: 'column',
    width: '100vw',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    maskType: '$2',
    color: '$gray200',
  },

  '@media (max-width: 864px)': {
    padding: '$5',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',
  '-webkit-box-reflect':
    'below 2px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))',

  '@media(max-width: 380px)': {
    display: 'none',
  },

  '@media (max-width: 864px)': {
    margin: '$20',
    width: '80%',
    padding: '$5',
  },
})
