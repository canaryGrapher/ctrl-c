import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontSizes } from '@fluentui/theme';
import phone1 from '../Cards/images/phone1.png';
import 'animate.css';

const BankApp = () => {
    //creates app card
    const wrapper = {
        display: 'grid',  
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'minmax(100px, auto)',
    }
    const one = {
        gridColumn: '1 / 3',
        gridRow: '1',
    }
    const two = {
        gridColumn: '3',
        gridRow: '3',
    }
    const three = {
        gridColumn: '1',
        gridRow: '2 / 5',
    }
    return (
      <div class="row" style={{flexGrow: '1'}}>
          <Grid item xs={5}>
          <div style={wrapper}>
              <div style={one}>
                  Our Very Own App!!
              </div>
              <div style={three}>
                  <a href='http://play.google.com/store/my-bank?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img style={{height: 100, width: 200}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                </a>
              </div>
              <div style={two}>
              <div className="info-card info-column hidden animate__animated animate__flash">
                <img style={{height: 400, width: 200, display: 'block', marginLeft: 'auto', marginRight: 'auto', transform: 'rotate(20deg)', border: '5px solid black', borderRadius: '10%'}} alt="DIE!" src={phone1} />
            </div>
            </div>
          </div>
          </Grid>
      </div>
    );
};

export default BankApp;