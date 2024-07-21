import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import { Input } from '@nextui-org/react';

const LoginForm = () => {
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div color={'flex flex-col gap-2 items-center'}>
          <div className={'flex flex-row items-center gap-3'}>
            <GiPadlock size={30} />
            <h1 className={'text-3xl font-semibold'}>Login</h1>
          </div>
          <p color={'text-neutral-500'}>Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form action=''>
          <div className={'space-y-4'}>
            <Input label={'Email'} variant={'bordered'} />
            <Input label={'Password'} variant={'bordered'} />
            <Button fullWidth color={'secondary'} type={'submit'}>
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
