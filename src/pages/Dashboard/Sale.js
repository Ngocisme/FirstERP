import HeaderHello from "../../components/HeaderHello"
import React from "react"
import { Grid,Paper,Box, Typography } from "@mui/material"
import TableSale from "../../components/Sale/TableSale"

const Sale = () => {
      return (
            <>
                  <HeaderHello />
                  <Grid container spacing={2}>

                        <Grid item xs={12}>
                              <Paper elevation={3}>
                                    <Box p={2}>
                                          <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>đơn hàng phải giao trong ngày</Typography>
                                          <TableSale />
                                    </Box>
                              </Paper>

                        </Grid>
                  </Grid>
            </>
      )
}

export default Sale