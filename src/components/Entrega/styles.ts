import styled from 'styled-components'
import { cores } from '../../styles'

export const Rotulo = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  display: block;
  color: ${cores.begeEscuro};
`
export const Entrada = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  background-color: ${cores.begeEscuro};
  border: 0;
  font-size: 14px;
  color: #4b4b4b;
  width: 344px;
  height: 32px;
`

export const CampoDuplo = styled.div`
  display: flex;
  justify-content: space-between;
`
