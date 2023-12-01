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
  margin-bottom: 16px;
`

export const BarraLateral = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 8px 0 8px;
  overflow-y: auto;

  p {
    color: ${cores.begeEscuro};
  }
`

export const ItemCart = styled.li`
  display: flex;
  background-color: ${cores.begeEscuro};
  padding: 8px 8px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 4px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const ContainerValor = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const TextoValor = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`

export const Valor = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
`
