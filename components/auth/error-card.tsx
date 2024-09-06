import { CardWrapper } from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon
          className="text-destructive"
          width={25}
          height={25}
        />
      </div>
    </CardWrapper>
  );
};
