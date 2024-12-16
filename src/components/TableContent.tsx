import TableButton from "./TableButton";
import React, { CSSProperties } from "react";

function TableContent(): React.ReactElement {
  return (
    <div style={styles.tableContainer}>
      <div style={styles.table}>
        <div style={styles.tableHeaderRow}>
          {tableHeaders.map((header, index) => (
            <div key={index} style={styles.tableHeaderCell}>
              {header}
            </div>
          ))}
        </div>
        {tableData.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.tableDataRow}>
            <div style={styles.tableDataCell}>{row.basicPay}</div>
            <div style={styles.tableDataCell}>{row.netPay}</div>
            <div style={styles.tableDataCell}>{row.totalDeduction}</div>
            <div style={styles.tableDataCell}>{row.totalIncome}</div>
            <div style={styles.tableDataCell}>{row.tax}</div>
            <div style={styles.tableDataCell}>{row.month}</div>
            <div style={styles.tableDataCell}>
              <TableButton text="View Payslip" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableContent;

const tableHeaders = [
  "Basic Pay",
  "Net Pay",
  "Total Deduction",
  "Total Income",
  "Tax",
  "Month",
  "",
];

interface PayrollData {
  basicPay: number;
  netPay: number;
  totalDeduction: number;
  totalIncome: number;
  tax: number;
  month: string;
}

const tableData: PayrollData[] = [
  {
    basicPay: 10000,
    netPay: 8000,
    totalDeduction: 2000,
    totalIncome: 12000,
    tax: 1000,
    month: "Jan 2024",
  },
  {
    basicPay: 10000,
    netPay: 8000,
    totalDeduction: 2000,
    totalIncome: 12000,
    tax: 1000,
    month: "Mar 2024",
  },
];

const styles: { [key: string]: CSSProperties } = {
  tableContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    overflowX: "auto",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    // width: "100%",
    overflowX: "auto",
    minWidth: "900px",
  },
  tableHeaderRow: {
    display: "flex",
    backgroundColor: "lightgrey",
    color: "white",
  },
  tableDataRow: {
    display: "flex",
    borderBottom: "1px solid lightgrey",
  },
  tableDataCell: {
    flex: 1,
    textAlign: "right" as CSSProperties["textAlign"],
    padding: "8px",
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: "right" as CSSProperties["textAlign"],
    padding: "8px",
    borderBottom: "2px solid grey",
  },
};