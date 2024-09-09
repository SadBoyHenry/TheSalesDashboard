import React from 'react';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Bar } from 'react-chartjs-2';

// Dummy data for the chart
const chartData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Columns for DataGrid
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

// Rows for DataGrid
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 4, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 5, lastName: 'Melisandre', firstName: 'Unknown', age: 150 },
  { id: 6, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 7, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 8, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard Overview
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales Data
            </Typography>
            <Bar data={chartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Latest Transactions
            </Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
