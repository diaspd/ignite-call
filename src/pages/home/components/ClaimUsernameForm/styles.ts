import { Box, Text, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 864px)': {
    gridTemplateColumns: '1fr',
  },
})

export const FormError = styled('div', {
  position: 'absolute',

  [`> ${Text}`]: {
    color: '#ff4d4d',
  },
})
