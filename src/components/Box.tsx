import { ReactNode } from 'react';

const Box = ({
  alignItems = 'flex-start',
  children,
  className,
  gap = 0,
  justifyContent = 'flex-start',
}: {
  alignItems?: string,
  children: ReactNode,
  className?: string,
  gap?: number,
  justifyContent?: string,
}) => {
  return <div style={{
    display: 'flex',
    alignItems,
    gap: `${gap}px`,
    justifyContent,
  }} className={className}>{children}</div>
};

export default Box;