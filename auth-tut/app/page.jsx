import React from 'react';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const MainPage = () => {
  return (
    <main className="bg-sky-500 h-full flex flex-col items-center justify-center">
      <h1 className={cn('space-y-6 font-semibold text-2xl', font.className)}>
        🔐 Auth
      </h1>
      <h3 className="text-lg mt-2">
        A Simple Authentication Service
      </h3>
      <div className='p-5 mt-4'>
        <LoginButton node="modal" asChild={true}>
          <Button>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
};

export default MainPage;
