import { ThreeCircles } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color={'var(--accent)'}
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%'
      }}
    />
  );
};
