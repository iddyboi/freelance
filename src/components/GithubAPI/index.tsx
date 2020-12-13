import React, { useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const GithubJobs = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api')
      .then((data) => console.log(data.data));
    return () => {};
  }, []);
  return <div></div>;
};

export default GithubJobs;
