import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'animate.css';
import CEO from "../../Resources/founder.jpg"

const InfoGrid = () => {
  //creates card
  function CreateInfoCard({ card }) {
    return (
      <Grid item xs={11}>
        <div className="info-text">
          <span style={{ fontWeight: 'bold' }}>{card.heading}</span>
          <hr
            className="animate__animated animate__fadeInLeft"
            style={{ color: 'white' }}
          ></hr>
          {card.text}
        </div>
      </Grid>
    );
  }

  return (
    <div
      class="container-fluid"
      style={{ flexGrow: '1' }}
    >
      <div className="row mx-auto mt-5 rounded text-white py-4" style={{ width: "98%", backgroundColor: 'rgb(122, 122, 235)'}}>
        <div className="col-12 col-md-6 hidden animate__animated animate__flash d-flex flex-column justify-content-center px-5 my-auto">
          <CreateInfoCard
            card={{
              heading: 'Why choose us?',
              text:
                "We are the best at what we do. We have the world's wealthiest people's trust in us. We have the best bankers in the world who are loyal to customers as well as the company. With faster loan processing and 97.34% customer satisfaction, we have dominated the banking industry for a whopping 78 years and will continue to do so in the foreseeable future. "
            }}
          />
        </div>
        <div className="col-12 col-md-6 hidden d-flex flex-column justify-content-center animate__animated animate__flash">
          <div className="d-flex flex-column text-center text-white py-3">
            <img className="img-fluid rounded-circle mx-auto" src={CEO} alt="Meet the CEO" style={{height: "35vh", width: "35vh"}} />
            <h4 className="font-weight-bold p-0 m-0">Morgan Munroe</h4>
            <p className="m-0 p-0">Meet our CEO. Serving his 5th year as the most successful, and dedicated employee. Morgan believes in progress through aggressive expansion and human resource enforcement. No doubt our employees are the happiest workforce.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
