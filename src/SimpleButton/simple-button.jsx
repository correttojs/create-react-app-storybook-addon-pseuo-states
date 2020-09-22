import * as React from 'react';
// import style from './simple-button.module.scss';
import classNames from 'classnames';
import styled from 'styled-components'
const ButtonStyle = styled.button`
   background: violet;

  &:hover {
    background: green;
  };
  &:focus {
    background: blue;
    &:hover {
      background: #61DAFB;
    }
  };
  &:active {
    background: red;
  }
`;



export const SimpleButton = (props) => {
    return (
        <ButtonStyle
            ref={props.innerRef}
            // style={props.style}
            onClick={props.onClick ? props.onClick : () => null}
            disabled={props.disabled}
            // className={classNames(
            //     style.Button,
            //     {[style.big]: props.isBig},
            //     {[style.rounded]: props.rounded}
            // )}
        >
            {props.label}
        </ButtonStyle>
    );
};
