import clsx from 'clsx';

import s from './page-button.module.scss';

export type NavigationButtonPropsType = {
  disabled?: boolean;
  onClick: () => void;
};

type PageButtonPropsType = {
  page: number;
  selected: boolean;
} & NavigationButtonPropsType;

export const PageButton = ({ disabled, onClick, page = 1, selected }: PageButtonPropsType) => {
  return (
    <button
      className={clsx(s.pageButton, selected && s.selected)}
      disabled={selected || disabled}
      onClick={onClick}
      type={'button'}
    >
      <span>{page}</span>
    </button>
  );
};
