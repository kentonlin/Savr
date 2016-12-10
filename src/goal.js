import React from 'react';

const Goal = React.createClass({
  render() {
    return(
      <div id="viz_container"
        style="border:1px solid #777; width:100%; height:100%;
        margin: 0px">
        <div id="viz_div" style="margin:0px auto; width:300px"></div>
      </div>
    )
  }
})

export default Goal;
