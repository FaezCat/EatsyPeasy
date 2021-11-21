import { Fragment, useState } from "react"
import {Button, IconButton, ToggleButton, ToggleButtonGroup} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom"

export default function QuestionThree(props) {
  const navigate = useNavigate();
  const [pricePoint, setPricePoint] = useState([]);
  //const [formats, setFormats] = React.useState();

  const handlePrice = (event, newPricePoints) => {
    setPricePoint(newPricePoints);
  };

  return(
    <Fragment>
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
      style={{border: 'transparent'}}>
        <Fragment>
        <h1>💵</h1>
        less than $10
        </Fragment>
      </ToggleButton>
      <ToggleButton value={2}>
      💵
      between $10 and $20
      </ToggleButton>
      <ToggleButton value={3}>
      💵💵💵 between $20 and $30
      </ToggleButton>
      <ToggleButton value={4}>
      💵💵💵💵 more than $30
      </ToggleButton>
      </ToggleButtonGroup>
      <Button variant="contained" onClick={() => {props.clickHandler(pricePoint); navigate('/results'); props.setResults(true);}}>Next</Button>
    </Fragment>
  );
}