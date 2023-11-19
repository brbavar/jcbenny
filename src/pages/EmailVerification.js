import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useToken } from '../lib/useToken';
import axios from 'axios';

import { EmailVerified } from '../components/EmailVerified';
import { EmailNotVerified } from '../components/EmailNotVerified';

export const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { VerificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(
          'https://weak-puce-toad-garb.cyclic.app/verify-email',
          {
            VerificationString,
          }
        );

        console.log(`response = ${JSON.stringify(response)}`);

        const { token } = response;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (e) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };

    loadVerification();
  }, [setToken, VerificationString]);

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailNotVerified />;
  return <EmailVerified />;
};
