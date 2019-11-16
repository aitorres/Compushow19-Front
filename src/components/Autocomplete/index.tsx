import * as React from "react";
import { withStyles, TextField, InputAdornment, Paper, Menu, MenuItem } from "@material-ui/core";
import styles from "./styles";
import Search from '@material-ui/icons/Search'

const Autocomplete = (props: any) => {
    const { classes, computistas } = props

    const [computistasArray, setComputistasArray]: any = React.useState([])
    const [text, setText] = React.useState('')
    const [selectedId, setSelectedId] = React.useState(9999)

    React.useEffect(() => {
        if (text === '') {
            setComputistasArray([])
        }
        if (text != '') {
            setComputistasArray([...props.computistas].filter(item => item.fullName.toLowerCase().includes(text.toLowerCase())))
        }
        if (computistasArray.length === 1 && computistasArray[0].fullName.length === text.length) {
            setSelectedId(computistasArray[0].id)
        }
        else if (computistasArray.length != 1 || (computistasArray.length === 1 && computistasArray[0].fullName.length != text.length)) {
            setSelectedId(9999)
        }
    }, [text])

    return (
        <React.Fragment>
            <div style={{position: 'relative', marginRight: '10px'}}>
                <Paper style={{ width: '100%', position: 'absolute', zIndex: 9, top: '56px' }}>
                    {computistasArray.slice(0, 5).map((e: any, i: number) => e.fullName != text ? <MenuItem key={i} onClick={() => setText(e.fullName)}>{e.fullName}</MenuItem> : null)}
                </Paper>
                <TextField value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setText(e.target.value)
                    if (!e.target.value) {
                        setComputistasArray([])
                    }
                }} fullWidth
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search style={{ color: 'gray' }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </React.Fragment>
    )

}

export default (withStyles(styles)(Autocomplete));
