import React from 'react';

// import "./ReactTracking.css";
var Spinner = require('react-spinkit');
var ReactTracking = function (props) {
    var _a = React.useState(true), loading = _a[0], setLoading = _a[1];
    var hideSpinner = function () {
        setLoading(false);
    };
    return (React.createElement("div", null,
        loading ? (React.createElement(Spinner, { loading: "lazy", className: "loading text-center", name: "three-bounce", color: "blue", fadeIn: "none" })) : null,
        React.createElement("iframe", { src: "http://tracking.consoltics.com", width: "100%", height: "700", onLoad: hideSpinner, frameBorder: "0" })));
};

export { ReactTracking };
//# sourceMappingURL=index.js.map
