import React, { useState } from 'react';
import {
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import { randomBytes } from 'crypto';
import { backgroundColor } from '~/styles/colors';
import { Container, Photos, PopUp } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  const [visibility, setVisibility] = useState(false);
  const [actived, setActived] = useState(0);

  function handleOpen(item = actived) {
    setVisibility(!visibility);
    setActived(item);
  }

  function handleNext(index = 1) {
    let newValue = 0;

    if (index > 0) {
      newValue = actived === data.length - 1 ? 0 : actived + 1;
    } else {
      newValue = actived === 0 ? data.length - 1 : actived - 1;
    }

    setActived(newValue);
  }

  return (
    <Container>
      <Photos>
        {data.map((item, index) => (
          <button
            type="button"
            key={`${item}_${randomBytes(10)}`}
            onClick={() => handleOpen(index)}
          >
            <img
              src={`https://api.adorable.io/avatars/1000/adorable${index}.png`}
              alt="reunião de planegamento"
            />
          </button>
        ))}
      </Photos>
      <PopUp opened={visibility}>
        <MdKeyboardArrowLeft
          color={backgroundColor}
          onClick={() => handleNext(-1)}
        />
        <span>
          <MdClose color={backgroundColor} onClick={() => handleOpen()} />
          <img
            src={`https://api.adorable.io/avatars/285/adorable${actived}.png`}
            alt="reunião de planegamento"
          />
        </span>
        <MdKeyboardArrowRight color={backgroundColor} onClick={handleNext} />
      </PopUp>
    </Container>
  );
}
