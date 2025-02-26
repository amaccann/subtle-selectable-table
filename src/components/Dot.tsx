import { DotVariants } from '../constants';
import './Dot.css';

const Dot = ({variant}: {variant: DotVariants}) => {
  return (
    <span className={`dot dot--${variant}`} />
  );
};

export default Dot;