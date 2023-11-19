import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useToken } from '../lib/useToken';
import axios from 'axios';

import { EmailVerified } from '../components/EmailVerified';
import { EmailNotVerified } from '../components/EmailNotVerified';

export const EmailVerification = () => {
  console.log('top of EmailVerification');

  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { VerificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    console.log('top of useEffect');

    const loadVerification = async () => {
      try {
        const response = await axios.put(
          'https://weak-puce-toad-garb.cyclic.app/verify-email',
          {
            VerificationString,
          }
        );
        const { token } = response.data;

        console.log(`response = ${JSON.stringify(response)}`);
        console.log(`token before set = ${token}`);

        setToken(token);

        console.log(`token after set = ${token}`);

        setIsSuccess(true);
        setIsLoading(false);
      } catch (e) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };

    loadVerification();

    console.log('bottom of useEffect');
  }, [setToken, VerificationString]);

  console.log('bottom of EmailVerification');

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailNotVerified />;
  return <EmailVerified />;
};
