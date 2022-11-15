import React from "react";
// import "./ReactTracking.css";
var Spinner = require('react-spinkit');

export interface ITranckingProps {
}

export const ReactTracking: React.FunctionComponent<ITranckingProps> = (props:ITranckingProps) => 
{
    const [loading, setLoading] = React.useState(true);
    const hideSpinner = () => {
        setLoading(false);
    };

    return (
        <div>
          {loading ? (
            <Spinner
              loading="lazy"
              className="loading text-center"
              name="three-bounce"
              color="blue"
              fadeIn="none"
            />
          ) : null}
          <iframe
            src="http://tracking.consoltics.com"
            width="100%"
            height="700"
            onLoad={hideSpinner}
            frameBorder="0"
            // marginHeight="0"
            // marginWidth="0"
          />
        </div>
    ); 
}

export default ReactTracking;