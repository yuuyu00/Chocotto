import React, { useState } from 'react';
import { Segment, Input, Form, Header } from 'semantic-ui-react';

export default () => {
  const [pow, setPow] = useState(0);
  const [atk, setAtk] = useState(0);
  const [lv, setLv] = useState(0);

  const factoryHandleSet = (upperLimit, setFunc) => e => {
    if (parseInt(e.target.value) < upperLimit) {
      setFunc(parseInt(e.target.value));
    } else if (e.target.value == '') {
      setFunc(0);
    }
  };

  const handleSetPow = e => factoryHandleSet(1000, setPow)(e);
  const handleSetAtk = e => factoryHandleSet(10000, setAtk)(e);
  const handleSetLv = e => factoryHandleSet(100, setLv)(e);

  return (
    <>
      <Header>アタリキ上昇量計算</Header>
      <Segment style={{marginTop: '25px'}}>
        <Form>
          <Form.Field>
            <h4>
              上昇ATK:{' '}
              {Math.floor(
                (pow * 2 + atk) *
                  ((pow + lv - 100) / 100 < 1.1 ? 1.1 : (pow + lv - 100) / 100)
              )}
            </h4>
          </Form.Field>
          <Form.Field>
            <label>POW合計</label>
            <input type="tel" value={pow} onChange={handleSetPow} />
          </Form.Field>
          <Form.Field>
            <label>装備ATK</label>
            <input type="tel" value={atk} onChange={handleSetAtk} />
          </Form.Field>
          <Form.Field>
            <label>キャラLV</label>
            <input type="tel" value={lv} onChange={handleSetLv} />
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
};
