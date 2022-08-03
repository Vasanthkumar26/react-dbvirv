import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Counter() {
  const count = useSelector(selectCount);

  return (
    <div>
      <div></div>
    </div>
  );
}
