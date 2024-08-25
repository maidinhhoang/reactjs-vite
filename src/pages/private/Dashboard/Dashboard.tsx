import React, { useEffect } from 'react';
import axios from 'axios';

import { TDashboardProps } from './Dashboard.types';

import './Dashboard.scss';

const Dashboard: React.FC<TDashboardProps> = () => {
  const axiostest = async (): Promise<any> => {
    return await axios
      .post(
        'http://43.202.1.134:5600/enclave/v2/console/setting.retention.fetch',
        // { offset: 0, limit: 1, order_by: 'DESC' },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBiYjdhNTVkLWJkOGQtNGM5MS1iMGI2LWEwZDRmN2U2ZTlmZSIsInVpZCI6Im1udGt1ZyIsImV4cCI6MTcwNjgxODIzNiwiVXNlclNlc3Npb25JRCI6IjkyYzcyNjQyLWM3ZTAtNGQzZC04OGYxLWE1NDljNDU4ZDEwNSJ9.UXdQx8e05N_-hA5p6d4pPE_tiC2xnHPqTB5yla2trmo'
          }
        }
      )
      .catch((err) => {
        return err;
      });
  };

  const fetch = async (): Promise<void> => {
    axiostest()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div className='Dashboard'>Dashboard</div>;
};

export default Dashboard;
