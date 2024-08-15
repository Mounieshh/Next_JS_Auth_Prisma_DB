"use client"

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';


export const LoginButton = ({
  children,
  node = 'redirect',
  asChild = false
}) => {


  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login')
  };

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

LoginButton.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.oneOf(['modal', 'redirect']),
  asChild: PropTypes.bool
};

LoginButton.defaultProps = {
  node: 'redirect',
  asChild: false
};

export default LoginButton;
