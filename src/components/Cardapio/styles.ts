import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
`

export const Infos = styled.div`
  background-color: ${cores.salmao};
  width: 320px;
  height: 338px;
  margin-bottom: 32px;
`

export const Imagem = styled.img`
  padding: 8px;
`

export const Comida = styled.h3`
  font-size: 16px;
  color: ${cores.begeClaro};
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`

export const Ingredientes = styled.p`
  color: ${cores.begeClaro};
  margin-left: 8px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 22px;
`

export const Botao = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.salmao};
  margin: 8px;
  margin-top: 4px;
  font-weight: 700;
  border: none;
  width: 304px;
  height: 24px;
  font-size: 14px;
  cursor: pointer;
`
export const JanelaModal = styled.div``

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .container {
    max-width: 1024px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.salmao};
  display: flex;
  padding: 32px;
  position: relative;
  z-index: 1;

  .foto {
    height: 280px;
  }

  .desc {
    color: #fff;
    margin-left: 24px;

    h3 {
      font-size: 18px;
      line-height: 21.09px;
      align-items: center;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 16px;
    }

    .botaozin {
      margin: 0px;
      width: 218px;
    }
  }

  .fechar {
    position: absolute;
    cursor: pointer;
    top: 8px;
    right: 8px;
  }
`
