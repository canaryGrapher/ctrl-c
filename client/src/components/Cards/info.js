import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'animate.css';

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
          {/* <br></br> */}
          {card.text}
        </div>
      </Grid>
    );
  }

  return (
    <div class="row" style={{ flexGrow: '1' }}>
      {/* <div className="row"> */}
      <div className="info-card info-column hidden animate__animated animate__flash">
        <CreateInfoCard
          card={{
            heading: 'XYZ HAHAH',
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }}
        />
      </div>
      <div className="info-card info-column hidden animate__animated animate__flash">
        <CreateInfoCard
          card={{
            heading: 'HAHAH XYZ',
            text:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default InfoGrid;
