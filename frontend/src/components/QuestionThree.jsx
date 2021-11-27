import { Fragment, useState } from "react"
import {Button, ToggleButton, ToggleButtonGroup} from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function QuestionThree(props) {
  const navigate = useNavigate();

  const [pricePoint, setPricePoint] = useState([]);

  const handlePrice = (event, newPricePoints) => {
    setPricePoint(newPricePoints);
  };

  return(
    <Fragment>
    {props.results === false && 
    <div>
      <div className="page-number-display">
        3 of 4
      </div>
      <h2>How much are you willing to spend?</h2>
      <h3>Pick one or multiple options</h3>
      <ToggleButtonGroup
      value={pricePoint}
      onChange={handlePrice}
      fullWidth={true}
      size={'large'}
      color={'success'}
      >
      <ToggleButton value={1}
      style={{fontFamily: 'Quicksand, sans-serif'}}>
        <Fragment>
        <h1>💵</h1>
        less than $10
        </Fragment>
      </ToggleButton>
      <ToggleButton value={2}
      style={{fontFamily: 'Quicksand, sans-serif'}}>
      💵
      between $10 and $20
      </ToggleButton>
      <ToggleButton value={3}
      style={{fontFamily: 'Quicksand, sans-serif'}}>
      💵💵💵 between $20 and $30
      </ToggleButton>
      <ToggleButton value={4}
      style={{fontFamily: 'Quicksand, sans-serif'}}>
      💵💵💵💵 more than $30
      </ToggleButton>
      </ToggleButtonGroup>
      <Button style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" onClick={() => {
        props.clickHandler(pricePoint); 
        navigate("/results");
      }}>Next</Button>
    </div>}
    </Fragment>
  );
}