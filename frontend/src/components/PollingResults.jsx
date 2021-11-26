import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Fragment } from 'react';
import { getWinningRestaurant } from '../helpers/getWinningRestaurant';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import useInterval from '../hooks/useInterval';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Quicksand, sans-serif'
}));

export default function PollingResults(props) {
  
  const { alpha_numeric_id } = useParams();

  const [pollData, setPollData] = useState(false);
  const [usersData, setUsersData] = useState(false);
  const [winningRestaurant, setWinningRestaurant] = useState(false);

  // function used to make API calls in order to dynamically update our components
  const pollApiCall = () => axios({
    method: 'get', //need to update this to GET the 3 rest objs to populate this page
    url: `http://localhost:3000/polls/show/${alpha_numeric_id}/results`, //make sure to point this to backend
  })
  .then(function (response) {
    setPollData(response.data.poll);
    setUsersData(response.data.users);
    return response.data.poll;
  })
  .then ((pollData)=> {
    const topRestaurant = getWinningRestaurant(pollData);
    setWinningRestaurant(topRestaurant);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  // this useEffect fetches our first batch of data before the refreshes below
  useEffect(() => {
    pollApiCall();
  }, [])
  
  // useInterval custom hook - refreshes our data via fresh API calls without causing memory leaks
  useInterval(pollApiCall, 5000)
  
  const data = {
    labels: [ pollData.restaurant_1_name, pollData.restaurant_2_name, pollData.restaurant_3_name],
    datasets: [
      {
        label: '# of Votes',
        data: [pollData.restaurant_1_votes, pollData.restaurant_2_votes, pollData.restaurant_3_votes],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
          ticks: {
              stepSize: 1
          }
      }
    },
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Restaurant Voting Results',
      },
    },
    maintainAspectRatio: false
  };

return(
  <Fragment>
    {winningRestaurant && <div>
      <Bar data={data} options={options} height={400}></Bar>
    </div>}
    {winningRestaurant && <Item>
      <h2>{winningRestaurant.restaurant_name}</h2>
      <h3>Business Hours:</h3>
      <h4>{winningRestaurant.business_hours}</h4>
      <h3>Contact Information:</h3>
      <h4>{winningRestaurant.phone_number}</h4>
      <h3>Directions:</h3>
      <h4>{winningRestaurant.maps_directions}</h4>
    </Item>   }
  </Fragment>
);  
}

