import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react-transition-group/node_modules/@types/react';


const useStyles = makeStyles((theme) => ({
    customSelect:{
        display: 'flex',
        flexDirection: 'row'
    }
}));
type Props = {
    progressSteps: string[];
    defaultProgress : string ;
    size: string
}
const CustomSelect : React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [currentProgressStep, setCurrentProgressStep] = useState<string>('');
    useEffect(()=>{
        setCurrentProgressStep(props.defaultProgress);
    },[props]);
    const handleChange = (event: any)=>{
        console.log('select value',event.target.value);
        setCurrentProgressStep(event.target.value);
    }
    return(
        <div className={classes.customSelect}>
            <Select onChange={handleChange}>
                {
                    props.progressSteps.map( progress =>
                        <MenuItem value={progress}>{progress}</MenuItem>
                    )
                }
            </Select>
            <Button disabled={props.progressSteps.pop() === currentProgressStep }>
                <ArrowRightIcon></ArrowRightIcon>
            </Button>
        </div>
    );
}
export default CustomSelect;