import React from 'react';
import classes from './Layout.module.scss';
import Screen from '../../shared/uiComponents/Screens/Screen';
import { config } from './screenConfig/config';
export default function Layout() {
  return (
    <div className={classes.Layout}>
      {Object.keys(config).map((key) => {
        const element = config[key];
        return (
          <div key={element.id} className={classes[element.className]}>
            <Screen {...element.componentProps} />
          </div>
        );
      })}
    </div>
  );
}
