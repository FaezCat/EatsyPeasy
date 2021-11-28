import Clipboard from 'clipboard/dist/clipboard.min'
import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';


export default function LinkPage(props) {
  
  const location = useLocation();
  //console.log("location.state.alpha:", location.state.poll.alpha_numeric_id);

  new Clipboard('.btn')
  const navigate = useNavigate();
  return (
    <Fragment>
    <div className="link-text">
      <h1>Unique link to share with your friends:</h1>
      <div id="link-text">
        localhost:3001/poll/{location.state.poll.alpha_numeric_id}
      </div>
      {/* <button className="btn" data-clipboard-target="#link-text">
        <img src="https://img.icons8.com/office/16/000000/clipboard.png" alt="Copy to clipboard" />
      </button> */}

  <TextField 
              value={`localhost:3001/poll/${location.state.poll.alpha_numeric_id}`} 
              // onChange={(event) => setAnswer(event.target.value)} 
              InputLabelProps={{style: {fontFamily: 'Quicksand, sans-serif'}}} 
              fullWidth id="input-with-sx" 
              />

<IconButton aria-label="Copy to clipboard" className="btn" data-clipboard-target="#link-text">
  <ContentCopyIcon alt="Copy to clipboard"></ContentCopyIcon>
</IconButton>

    </div>

<Button 
style={{backgroundColor: "#0198E1", fontFamily: 'Quicksand, sans-serif'}} variant="contained" 
onClick={() => {navigate(`../poll/${location.state.poll.alpha_numeric_id}`);}}>Vote
</Button>
</Fragment>
  )
}