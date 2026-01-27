import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker';


interface durations {
  [key: string]: number;
  acrylic: number
  gel: number
}

const typeDurations: durations = {
  acrylic: 2,  //2 hour time period for acrylic set 
  gel: 1.5,    // 1.5 hour time slot for gel set 
};

const timePadding = 15; //minutes
export const minTime = dayjs().set('hour', 7).startOf('hour');
export const maxTime = dayjs().set('hour', 19).startOf('hour');


const RenderCalandar = ({ setSelectedDate, selectedType, submissionFailed, selectedDate }: { setSelectedDate: React.Dispatch<React.SetStateAction<Dayjs | null>>, selectedType: string, submissionFailed: boolean, selectedDate: Dayjs | null }) => {
  // returns true if the time is invalid
  const shouldDisableTime: TimePickerProps['shouldDisableTime'] = (value, view) => {
    const date = dayjs('2026-01-28T19:00');
    const length = 90;

    const ex_date = date.subtract(typeDurations[selectedType] * 60 + timePadding, 'minute');
    const add_date = date.add(length + timePadding, 'minute');
    const ex_length = length + ((typeDurations[selectedType]) * 60) + (timePadding * 2);

    // validate hours: 
    if (view == 'hours' && value.hour() > ex_date.hour() && value.hour() < add_date.hour()) {
      if (value.diff(ex_date, 'hour') < 24 && value.diff(ex_date, 'hour') >= 0) {
        return true;
      }
    }

    // validate minutes: 
    const minuteDiff = value.diff(ex_date, 'minute');
    if (view === 'minutes' && minuteDiff > 0 && minuteDiff < ex_length) {
      return true;
    }
    return false; // 'value' is a valid date/time
  };

  const isWeekend = (date: Dayjs) => {
    const day = date.day();

    return day === 0 || day === 6 || date < dayjs();
  };

  if (selectedType.length == 0) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker
            disabled
            label={`Choose type of nails before date & time`}
            value={null}
            slotProps={{
              textField: {
                error: submissionFailed && !selectedDate,
                helperText: !selectedDate && submissionFailed ? 'This field is required' : '',
                sx: {
                  '& .MuiInputBase': {
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 800
                  },
                },
              },
            }}
          />

        </DemoContainer>
      </LocalizationProvider>
    )
  } else {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']} >
            {/* <MobileDateTimePicker */}
            <DateTimePicker
              label={`Choose date & time (duration: ${typeDurations[selectedType]} hr)`}
              autoFocus
              minTime={minTime}
              maxTime={maxTime}
              onChange={(newValue) => setSelectedDate(newValue)}
              value={selectedDate}
              name='Date'
              slotProps={{
                textField: {
                  error: submissionFailed && !selectedDate,
                  helperText: !selectedDate && submissionFailed ? 'This field is required' : '',
                  sx: {
                    fontFamily: 'quicksand'
                  }
                },
                // layout: {
                //   sx: {
                //     [`.MuiPickersLayout-root`]: {
                //       fontFamily: 'quicksand'
                //     },
                //   },
                // },
              }}
              // disablePast
              shouldDisableDate={isWeekend}
              shouldDisableTime={shouldDisableTime}
            // onError={(newError: DateTimeValidationError) => {
            //     setError(newError);
            // }}
            />
          </DemoContainer>
        </LocalizationProvider>
        {/* display the date time in a nice way: */}
        {/* <Chip label={`Chosen Date & Time:`}  /> */}
      </div>
    )
  }
}

export default RenderCalandar;