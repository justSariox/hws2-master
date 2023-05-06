import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            onChange={props.onChange}
            sx={{ margin: "0 30px",
                boxSizing: 'border-box',
                width: '147px',
                borderRadius: '10px',
                '& .MuiSlider-rail': {
                    color: '#000000',
                },
                '& .MuiSlider-thumb': {
                    color: '#2a4f70',
                    border: '6px solid #000000 ',
                },
                '& .MuiSlider-thumb:before': {
                    border: '5px solid white',
                },
                '& .MuiSlider-track': {
                    color: '#2a4f70',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
