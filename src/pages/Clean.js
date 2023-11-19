import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Clean() {
  return (
    <div id="wash">
      <div className="row">
        <h3>Car Wash</h3>
        <p>We are a friendly, helpful and professional group of people.</p>
      </div>
      <div className="progers">
        <div className="col">
          <CircularProgressbar className='progress'
            value={76}
            text="76%"
            styles={buildStyles({ pathColor: 'yellow' })}
          />
        </div>
        <div className="col">
          <CircularProgressbar className='progress'
            value={64}
            text="64%"
            styles={buildStyles({ pathColor: 'red' })}
          />
        </div>
        <div className="col">
          <CircularProgressbar className='progress'
            value={89}
            text="89%"
            styles={buildStyles({ pathColor: 'green' })}
          />
        </div>
        <div className="col">
          <CircularProgressbar className='progress'
            value={83}
            text="83%"
            styles={buildStyles({ pathColor: 'blue' })}
          />
        </div>
      </div>
    </div>
  );
}

export default Clean;
