import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import WatchListItem from '../../../components/WatchListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&.MuiTableRow-root': {
    cursor: 'pointer',
  },
  '&:hover': {
    backgroundColor: 'black',
    opacity: 1,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: 0,
    color: 'rgb(200,200,200)',
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    color: 'rgb(200,200,200)',
    fontSize: 13.5,
  },
}));

const TableBuyCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    color: '#54c88c',
    fontSize: 13.5,
  },
}));

const TableSellCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    color: '#ff6f6f',
    fontSize: 10.5,
  },
}));

const PositionsTable = ({ positionData, symbols, bids, asks, handleCancel, handleUpdate }) => {
  let totalProfit = 0;

  return (
    <TableContainer sx={{ fontWeight: 600 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Instrument</StyledTableCell>
            <StyledTableCell>Position ID</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Size</StyledTableCell>
            <StyledTableCell>Start Price</StyledTableCell>
            <StyledTableCell>Stop Loss</StyledTableCell>
            <StyledTableCell>Take Profit</StyledTableCell>
            <StyledTableCell>Current Price</StyledTableCell>
            <StyledTableCell>Commission</StyledTableCell>
            <StyledTableCell>Profit</StyledTableCell>
            <StyledTableCell>Final Profit</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positionData.map((row, index) => (
            <StyledTableRow
              key={row.positionID || index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                <WatchListItem
                  fromCurrency={row.symbolName.slice(0, 3)}
                  toCurrency={row.symbolName.slice(3, 6)}
                />
              </StyledTableCell>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.createdAt}</StyledTableCell>
              <TableBuyCell style={{ color: row.type === 'Sell' ? '#ff6f6f' : '#54c88c' }}>
                {row.type}
              </TableBuyCell>
              <StyledTableCell>{row.size}</StyledTableCell>
              <StyledTableCell>{row.startPrice}</StyledTableCell>
              <StyledTableCell>{row.stopLoss}</StyledTableCell>
              <StyledTableCell>{row.takeProfit}</StyledTableCell>
              <StyledTableCell>
                {row.currentPrice || 'N/A'}
              </StyledTableCell>
              <StyledTableCell>{row.commission}</StyledTableCell>
              <StyledTableCell>
                <p className={row.profit > 0 ? 'text-[#28A745]' : 'text-[#FB3746]'}>
                  {Number(row.profit || 0).toFixed(2)}
                </p>
              </StyledTableCell>
              <StyledTableCell>
                <p className={row.finalProfit > 0 ? 'text-[#28A745]' : 'text-[#FB3746]'}>
                  {Number(row.finalProfit || 0).toFixed(2)}
                </p>
              </StyledTableCell>
              <StyledTableCell className="space-x-5">
                <button onClick={() => handleCancel(row.id)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button onClick={() => handleUpdate(row.id, row.startPrice)}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PositionsTable.propTypes = {
  positionData: PropTypes.array.isRequired,
  symbols: PropTypes.array.isRequired,
  bids: PropTypes.array.isRequired,
  asks: PropTypes.array.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default PositionsTable;
