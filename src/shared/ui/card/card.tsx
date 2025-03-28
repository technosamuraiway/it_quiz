import s from './card.module.scss';
import { ReactNode, Ref } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export const Card = ({ children, className, ref }: Props) => {
  return (
    <div className={clsx(s.root, className)} ref={ref}>
      {children}
    </div>
  );
};
