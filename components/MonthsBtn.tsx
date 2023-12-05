/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Button } from './elements/Button';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  mnb: number;
}
function MonthsBtn(props: Props) {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        variant="danger"
        className="w-12 h-10"
        onClick={props.onDecrease}
      >
        {props.mnb === 1 ? (
          <TrashIcon className="w-4" />
        ) : (
          '-'
        )}
      </Button>
      <p>{props.mnb}</p>
      <Button
        className="w-12 h-10"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
}

export default MonthsBtn;
