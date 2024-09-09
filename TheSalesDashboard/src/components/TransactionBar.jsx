import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

// Dummy data for the transactions
const transactions = [
    { id: 1, type: "Credit", amount: "$500", date: "2023-09-01" },
    { id: 2, type: "Debit", amount: "$200", date: "2023-09-02" },
    { id: 3, type: "Credit", amount: "$300", date: "2023-09-03" },
];

function TransactionBar() {
  return (
    <Paper elevation={3} sx={{ maxWidth: 360, margin: 'auto', p: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
        Recent Transactions
      </Typography>
      <List>
        {transactions.map((transaction, index) => (
          <React.Fragment key={transaction.id}>
            <ListItem>
              <ListItemText primary={`Transaction ${transaction.id}`} secondary={`${transaction.type} - ${transaction.amount} on ${transaction.date}`} />
            </ListItem>
            {index < transactions.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TransactionBar;