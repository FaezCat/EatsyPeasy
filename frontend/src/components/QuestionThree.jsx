import { Fragment, useState } from "react"
import {Button, IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom"

export default function QuestionThree(props) {
  const navigate = useNavigate();
  const [pricePoint, setPricePoint] = useState([]);

  return(
    <Fragment>
      <div className="page-number-display">
        3 of 4
      </div>
      <h2>How much are you willing to spend?</h2>
      <h3>Pick one or multiple options</h3>
      {/* <Button confirm onClick={() => {console.log("saved answer for Q1")}}>Save</Button> */}
      
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>

      <Button variant="contained" onClick={() => {props.clickHandler(pricePoint); navigate('/results'); console.log();}}>Save</Button>
    </Fragment>
  );
}