import { ReactNode, Ref } from 'react';

import * as S from '@radix-ui/react-scroll-area';
import { clsx } from 'clsx';

import s from './scrollbar.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  /** maxHeight viewport in rems */
  maxHeight?: number | string;
  /** maxWidth viewport in rems */
  maxWidth?: number | string;
  type?: S.ScrollAreaProps['type'];
  ref?: Ref<HTMLDivElement>;
};

export const Scrollbar = ({
  children,
  className,
  maxHeight = '100%',
  maxWidth = '100%',
  type = 'auto',
  ref,
  ...rest
}: Props) => {
  const classNames = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  };

  const maxHeightConverted = typeof maxHeight === 'number' ? `${maxHeight}rem` : maxHeight;
  const maxWidthConverted = typeof maxWidth === 'number' ? `${maxWidth}rem` : maxWidth;

  const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted };

  return (
    <S.Root asChild ref={ref} type={type}>
      <div className={classNames.root} {...rest}>
        <S.Viewport className={classNames.viewport} style={viewportStyles}>
          {children}
        </S.Viewport>
        <S.Scrollbar className={classNames.scrollbar} orientation={'vertical'}>
          <S.Thumb className={classNames.thumb} />
        </S.Scrollbar>
        <S.Scrollbar className={classNames.scrollbar} orientation={'horizontal'}>
          <S.Thumb className={classNames.thumb} />
        </S.Scrollbar>
      </div>
    </S.Root>
  );
};

/* displayName для более понятной отладки в React DevTools */
Scrollbar.displayName = 'CustomVerticalScrollBar';
