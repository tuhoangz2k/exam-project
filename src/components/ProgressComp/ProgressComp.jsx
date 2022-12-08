import React from 'react';
import { Background, Container, Progress } from './ProgressComp.styled';

function ProgressComp({ bg, percent }) {
  return (
    <>
      <Container>
        <Background />
        <Progress percent={percent} bg={bg} />
      </Container>
    </>
  );
}

export default ProgressComp;
