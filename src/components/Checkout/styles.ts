import styled from 'styled-components'
import { cores } from '../../styles'

export const InputGroup = styled.div`
  label {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    display: block;
    color: ${cores.begeEscuro};
  }

  input {
    padding: 8px;
    margin-bottom: 8px;
    font-weight: 700;
    background-color: ${cores.begeEscuro};
    border: 0;
    font-size: 14px;
    color: #4b4b4b;
    width: 344px;
    height: 32px;

    &.error {
      border: 2px solid red;
    }
  }
`

export const CampoDuplo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const TextosFinais = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`
