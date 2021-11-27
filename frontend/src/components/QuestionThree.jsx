import { Fragment, useState } from "react"
import {Button, ToggleButton, ToggleButtonGroup} from '@mui/material';
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "../styles/QuestionThree.scss";

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
      <h2 className="q3-question">How much are you willing to spend?</h2>
      <h3 className="q3-question-subtext">Pick one or multiple options</h3>

      <ToggleButtonGroup
      value={pricePoint}
      onChange={handlePrice}
      fullWidth={true}
      size={'large'}
      color={'success'}
      >
      <ToggleButton value={1}
      style={{border: 'transparent'}}>
        <div>
        <AttachMoneyIcon 
              style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
              sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} /> <br/>
        less than $10
        </div>
      </ToggleButton>

      <ToggleButton value={2} style={{border: 'transparent'}}>
      <div>
        <AttachMoneyIcon 
              style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
              sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} /> <br/>
        between $10 and $20
        </div>
      </ToggleButton>

      <ToggleButton value={3} style={{border: 'transparent'}}>
      <div>
        <AttachMoneyIcon 
              style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
              sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} /> <br/>
        between $20 and $30
        </div>
      </ToggleButton>

      <ToggleButton value={4} style={{border: 'transparent'}}>
      <div>
        <AttachMoneyIcon 
              style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
              sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} />
        <AttachMoneyIcon 
        style={{ fill: '#0198E1' , margin: '0 0 0 0'}} 
        sx={{ color: 'action.active', mr: 1, my: 1, fontSize: 60}} /> <br/>
        more than $30
        </div>
      </ToggleButton>
      </ToggleButtonGroup>

      <Button
        style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
        onClick={() => {props.clickHandler(pricePoint); navigate("/results");}}>Next
      </Button>

    </div>}

    </Fragment>
  );
}