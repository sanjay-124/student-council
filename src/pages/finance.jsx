import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { ReactGrid} from '@silevis/reactgrid';
import '@silevis/reactgrid/styles.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_vwtx1Vv819PBY1QV2QpdD9ahRxYMpnk",
  authDomain: "student-council-dc47b.firebaseapp.com",
  projectId: "student-council-dc47b",
  databaseURL: 'https://student-council-dc47b-default-rtdb.firebaseio.com/',
  storageBucket: "student-council-dc47b.appspot.com",
  messagingSenderId: "969649927286",
  appId: "1:969649927286:web:58f5dce8e76e01ef885b57",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const getColumns = (columnCount) => {
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push({ columnId: `col${i}`, width: 150 });
  }
  return columns;
};

const headerRow = (columnCount) => {
  const cells = [];
  for (let i = 0; i < columnCount; i++) {
    cells.push({ type: 'header', text: `Column ${i + 1}` });
  }
  return { rowId: 'header', cells };
};

const getRows = (rowCount, columnCount) => {
  const rows = [headerRow(columnCount)];
  for (let i = 0; i < rowCount; i++) {
    const cells = Array(columnCount).fill({ type: 'text', text: '' });
    rows.push({ rowId: i, cells });
  }
  return rows;
};

const applyChangesToGrid = async (changes, prevGridData) => {
  const updatedGridData = [...prevGridData];

  await Promise.all(
    changes.map(async (change) => {
      const rowIndex = change.rowId;
      const columnIndex = change.columnId;

      // Update the local state
      updatedGridData[rowIndex].cells[columnIndex].text = change.newCell.text;

      // Update the data in Firebase
      await db.collection('gridData').doc(`${rowIndex}-${columnIndex}`).update({
        value: change.newCell.text,
      });
    })
  );

  return updatedGridData;
};

function Finance() {
  const [rowCount, setRowCount] = useState(3); // Initial row count
  const [columnCount, setColumnCount] = useState(3); // Initial column count
  const [gridData, setGridData] = useState(getRows(rowCount, columnCount));

  const columns = getColumns(columnCount);

  const handleChanges = async (changes) => {
    const updatedGridData = await applyChangesToGrid(changes, gridData);
    setGridData(updatedGridData);
  };

  useEffect(() => {
    // Load data from Firebase on component mount
    const fetchData = async () => {
      const snapshot = await db.collection('gridData').get();
      const loadedGridData = {};
      snapshot.forEach((doc) => {
        const [rowIndex, columnIndex] = doc.id.split('-');
        if (!loadedGridData[rowIndex]) {
          loadedGridData[rowIndex] = {};
        }
        loadedGridData[rowIndex][columnIndex] = doc.data().value;
      });

      const rows = getRows(rowCount, columnCount);
      // Merge loaded data into the existing rows
      Object.keys(loadedGridData).forEach((rowIndex) => {
        Object.keys(loadedGridData[rowIndex]).forEach((columnIndex) => {
          rows[rowIndex].cells[columnIndex].text = loadedGridData[rowIndex][columnIndex];
        });
      });

      setGridData(rows);
    };

    fetchData();
  }, []); // Run only once on mount

  return (
    <ReactGrid
      rows={gridData}
      columns={columns}
      onCellsChanged={handleChanges}
      onRowCountChange={setRowCount}
      onColumnCountChange={setColumnCount}
    />
  );
};

export default Finance;
