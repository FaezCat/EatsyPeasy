import { Bar } from 'react-chartjs-2';
import { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function PollingResults(props) {
  
  const { alpha_numeric_id } = useParams();


  useEffect(() => {
    
    axios({
      method: 'get', //need to update this to GET the 3 rest objs to populate this page
      url: `http://localhost:3000/polls/show/${alpha_numeric_id}/results`, //make sure to point this to backend
    })
    .then(function (response) {
      console.log("should be the returned 1 poll:", response);
      //add a function to oragnize the incoming poll data array
      // const createdRestObjs = organizePollJSON(response);
      // console.log("createdRestObjs", createdRestObjs);
      // //and make the get call for photo etc
      // const updatedObjs = addDetailsToRestaurantObjs(createdRestObjs);
      // console.log("updatedObjs", updatedObjs);
      // return updatedObjs;
    })
    // .then((updatedObjs)=> {
    //   setSelectedRestaurants(updatedObjs);
    // })
    .catch(function (error) {
      console.log(error);
    });
  }, [])
  
  const data = {
    labels: ['Red', 'Blue','G reen', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
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
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

return(
  <Bar data={data} options={options} />
);  
}

