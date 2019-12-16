import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;

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
export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 3px #000;
  margin-bottom: 30px;

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;

    tr td,
    tr th {
      padding: 10px 15px;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    tr td {
      font-size: 12px;
    }

    tr th {
      border: none;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      position: sticky;
      top: 0;
      background: #fff;
      box-shadow: 0 0 2px -1px rgba(0, 0, 0, 0.4);
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
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowForm = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #eee;

  form {
    width: 100%;
    display: flex;
  }

  input {
    padding: 5px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #ccc;
    flex: 1;
  }

  button {
    padding: 5px 10px;
    margin-left: 5px;
  }
`;

export const RowTable = styled.div`
  max-height: 175px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 0 0 4px 4px;
`;
