import { SyntheticEvent, useEffect, useRef } from 'react';

import './Checkbox.css';

const BASE_CLS = 'checkbox';

interface CheckboxProps {
  checked: boolean,
  id?: string,
  indeterminate?: boolean,
  label?: string,
  onChange: (e: SyntheticEvent) => void
}

const Checkbox = ({checked, id, indeterminate, label, onChange}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const className = indeterminate ? `${BASE_CLS} ${BASE_CLS}--indeterminate` : BASE_CLS;

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate!;
    }
  }, [indeterminate]);

  return (
    <input
      aria-checked={checked}
      aria-label={label}
      checked={checked}
      className={className}
      id={id}
      title={label}
      type="checkbox"
      onChange={onChange}
      ref={ref} />
  );
};

export default Checkbox;