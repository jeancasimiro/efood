import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.begeEscuro};
  display: block;
  text-align: center;
  height: 338px;
  margin-top: 80px;

  p {
    margin: 0 auto;
    width: 480px;
    font-size: 10px;
  }
`

export const Sociais = styled.div`
  padding: 32.5px 0 80px;
`
export const Icones = styled.img`
  margin-right: 8px;
`
