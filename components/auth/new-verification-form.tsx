'use client';

import { CardWrapper } from '@/components/auth/card-wrapper';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { newVerification } from '@/actions/new-verification';

import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

import { BeatLoader } from 'react-spinners';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError('Missing Token');
      setLoading(false);
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong ');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, error, success]);

  useEffect(() => {
    onSubmit(); // Actually invoke the onSubmit function
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login page"
    >
      <div className="flex items-center w-full justify-center">
        {loading ? (
          <BeatLoader />
        ) : (
          <>
            <FormSuccess message={success} />
            {!success && <FormError message={error} />}
          </>
        )}
      </div>
    </CardWrapper>
  );
};
