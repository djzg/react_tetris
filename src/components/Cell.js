import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>{console.log("rerender")}</StyledCell>
)

// exporting with React.memo which ensures it memorizes the Cell and keeps rerender optimized
export default React.memo(Cell);
