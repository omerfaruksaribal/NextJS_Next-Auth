'use client';

import { settings } from '@/actions/settings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useTransition } from 'react';

const SettingsPage = () => {
  const [usePending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({
        name: 'Ömerfaruk Sarıbal',
      });
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Button disabled={usePending} onClick={onClick}>
          Update ME
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
