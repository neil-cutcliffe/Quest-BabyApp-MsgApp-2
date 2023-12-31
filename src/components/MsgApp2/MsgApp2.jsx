/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import Card4Quest from 'src/components/Card4Quest/Card4Quest';
import ButtonFrame from 'src/components/ButtonFrame/ButtonFrame';

const MsgApp21 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: 'auto',
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const GridFrame = styled('div')({
  borderRadius: `0px`,
  display: `grid`,
  position: `relative`,
  isolation: `isolate`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `100%`,
  margin: `0px`,
  overflow: `hidden`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(430px, 1fr))`,
  columnGap: `10px`,
  rowGap: `10px`,
});

const Card4Quest = styled(Card4Quest)(({ theme }) => ({
  width: `430px`,
  margin: `0px`,
}));

const ButtonFrame1 = styled(ButtonFrame)(({ theme }) => ({
  height: `108px`,
  width: `430px`,
  position: `absolute`,
  left: `0px`,
  top: `706px`,
}));

function MsgApp2(props) {
  return (
    <MsgApp21 className={props.className}>
      <GridFrame>
        {props.posts &&
          props.posts.map((mypost, index) => {
            return <Card4Quest key={index} post={mypost} />;
          })}
      </GridFrame>
      <ButtonFrame1 />
    </MsgApp21>
  );
}

export default MsgApp2;
