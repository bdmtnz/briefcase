import './Select.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { LangContext } from '../../../redux/language/lang-context';

interface ISelectOption {
    label: string,
    value: number | string
}

interface ISelectParams {
    label: string,
    options: ISelectOption[],
    value: number | string,
    onChange: (value: number | string) => void
}

const SelectCustom = ({label, value, options, onChange}: ISelectParams) => {
    const {language} = useContext(LangContext)

    // const [age, setAge] = useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      onChange(event.target.value)
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{label}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={`${value}`}
          label={label}
          onChange={handleChange}
        >
          {
            options.map(option => {
                return (
                    <MenuItem key={uuid()} value={option.value}>{option.label}</MenuItem>
                )
            })
          }
          <MenuItem value={0}>
            <em>{language.Shared.Components.Select.Choose}</em>
          </MenuItem>
        </Select>
      </FormControl>
    )
}

export default SelectCustom