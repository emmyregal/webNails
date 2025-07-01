import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface CalandarProps {
    duration: number;
  }
  
  export default function Calandar({ duration }: CalandarProps) {
    // For now, just show the duration as confirmation
    console.log("Service duration (in hours):", duration);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label={`Choose date & time (duration: ${duration} hr)`} />
        </DemoContainer>
      </LocalizationProvider>
    );
  }