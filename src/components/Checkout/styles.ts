import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const CartBotao = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.salmao};
  font-weight: 700;
  border: none;
  width: 344px;
  height: 24px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`

export const BarraLateral = styled.aside`
  max-width: 360px;
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  overflow-y: auto;

  p {
    color: ${cores.begeEscuro};
  }

  h2 {
    font-size: 16px;
    color: ${cores.begeEscuro};
    margin-bottom: 16px;
    line-height: 18.75px;
  }
`
export const TextosFinais = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`
