import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;
export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 3px #000;
  margin-bottom: 30px;

  table {
    width: 100%;
    border-collapse: inherit;
    border-spacing: 0;
    tr td,
    tr th {
      padding: 10px 15px;
      align-items: center;
      justify-content: center;
    }

    tr td {
      font-size: 12px;
    }

    tr th {
      border-bottom: 1px solid #eee;
      font-size: 14px;
    }
    tr:nth-child(even) {
      background: #eee;
    }

    tr:last-child td {
      border: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #fff;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Actions = styled.div`
  button {
    background: #000;
    border-radius: 4px;
    padding: 10px 15px;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: ${lighten(0.05, '#000')};
    }
  }
`;
