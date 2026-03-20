import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomizedDataGrid from '../../src/components/CustomizedDataGrid';
import ActualWorkloadChart from './ActualWorkloadChart';
import PredictedWorkloadChart from './PredictedWorkloadChart';

export default function MainGrid() {
  	return (
    	<Box sx = {{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
      		{/* cards */}
      		<Typography component = "h2" variant = "h6" sx = {{ mb: 2 }}>Workload</Typography>
      		<Grid container spacing = {2} columns = {12} sx = {{mb: (theme) => theme.spacing(2)}}>
        		<Grid size={{ xs: 12, md: 6 }}>
          			<ActualWorkloadChart />
        		</Grid>
        		<Grid size={{ xs: 12, md: 6 }}>
          			<PredictedWorkloadChart />
        		</Grid>
      		</Grid>
      		<Typography component = "h2" variant="h6" sx = {{ mb: 2 }}>Details</Typography>
      		<Grid container spacing = {2} columns = {12}>
        		<Grid size = {{ xs: 12 }}>
          			<CustomizedDataGrid />
        		</Grid>
      		</Grid>
    	</Box>
  	);
}
