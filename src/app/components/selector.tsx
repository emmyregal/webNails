import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useState} from 'react'


export type NailType = 'acrylic' | 'gel';

interface TypeSelectProps {
  onChange: (value: NailType) => void;
}

export default function TypeSelect({ onChange }: TypeSelectProps) {
  const [selectedType, setSelectedType] = useState<NailType | "">('');
  const [inputValid, setInputValid] = useState<boolean>(false);


  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as NailType;
    setSelectedType(value);
    onChange(value);
  };

  const validateInput = () => {
    if (selectedType) {
      console.log(`selected type: ${selectedType}`)
      if (selectedType.length != 0) {
        console.log(`selected type: ${selectedType}`)
        setInputValid(true)
      }
    }
    setInputValid(false)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="nail-type-label">Type</InputLabel>
        <Select
          labelId="nail-type-label"
          id="nail-type-select"
          value={selectedType}
          label="Type"
          onChange={handleChange}
          error = {inputValid}
        >
          <MenuItem value="gel">Gel</MenuItem>
          <MenuItem value="acrylic">Acrylic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}