import { clsx } from 'clsx';

import s from './navigation-buttons.module.scss';

type NavigationButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

export const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      className={clsx(s.navigationButton, s.navigationButtonLeft, { [s.disabled]: disabled })}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
    >
      <span>▲</span>
    </button>
  );
};

export const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button
      className={clsx(s.navigationButton, s.navigationButtonRight, { [s.disabled]: disabled })}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
    >
      <span>▲</span>
    </button>
  );
};
