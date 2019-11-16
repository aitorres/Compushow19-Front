import * as React from "react";
import { withStyles, TextField, InputAdornment, Paper, MenuItem } from "@material-ui/core";
import styles from "./styles";
import Search from '@material-ui/icons/Search'

const Autocomplete = (props: any) => {
    const { computistasArray, setComputistasArray, text, setText, setSelectedId } = props

    React.useEffect(() => {
        if (text === '') {
            setComputistasArray([])
        }
        if (text !== '') {
            setComputistasArray([...props.computistas].filter(item => item.fullName.toLowerCase().includes(text.toLowerCase())))
        }
        if (computistasArray.length === 1 && computistasArray[0].fullName.length === text.length) {
            setSelectedId(computistasArray[0].id)
        }
        else if (computistasArray.length !== 1 || (computistasArray.length === 1 && computistasArray[0].fullName.length !== text.length)) {
            setSelectedId(9999)
        }
    }, [text])

    return (
        <React.Fragment>
            <div>
                <Paper style={{ width: '100%', position: 'relative', zIndex: 9 }}>
                    {computistasArray.slice(0, 5).map((e: any, i: number) => e.fullName !== text ? <MenuItem key={i} onClick={() => {
                        setText(e.fullName)
                        setSelectedId(e.id)
                    }}>{e.fullName}</MenuItem> : null)}
                </Paper>
                <TextField placeholder="Nominado" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
