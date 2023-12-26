import * as React from 'react';
import "./styles.css";


type TActionButtonProps = {
  varient: string,
  text: string,
  onClick?:any,
  ref?:any,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ActionButton: React.FC<TActionButtonProps> = ({varient, text, onClick,ref, ...props }) => {

  const clickHandler = (): void => {
    if (onClick) onClick();
  }

  return (
    <button onClick={clickHandler}  className={`button-wrap ${text === 'Cancel' ? 'secondaryColor':'primaryColor'}`} ref={ref} {...props}>{text}</button>
  )
}

export default ActionButton