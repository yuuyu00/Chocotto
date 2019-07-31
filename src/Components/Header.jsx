import React from 'react';
import {Menu, Icon} from 'semantic-ui-react'; 

export default () => {
  return (
    <Menu fixed="top" borderless style={{ backgroundColor: '#f2711c' }}>
      <Menu.Item>
        <Icon name="calculator" size="large" style={{ color: 'white' }} />
        <span style={{ fontSize: '18px', color: 'white' }}>ChocoCalc</span>
      </Menu.Item>
    </Menu>
  );
};
