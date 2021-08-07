import { nanoid } from 'nanoid';

export const config = {
  screen1: {
    id: nanoid(),
    className: 'Screen1',
    componentProps: {
      screenHeading: 'Arithmetic Quiz 1',
      inputsNeeded: [
        {
          inputType: 'number',
          instructionText: 'Number of Questions: ',
          id: nanoid(),
        },
      ],
    },
  },

  screen2: {
    componentProps: {
      screenHeading: 'Arithmetic Quiz 2',
      inputsNeeded: [
        {
          inputType: 'number',
          instructionText: 'Number of Questions: ',
          id: nanoid(),
        },
      ],
    },
    id: nanoid(),
    className: 'Screen2',
  },
};
