'use client';

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'space-y-4'}>
            <Input
              defaultValue={''}
              label={'Email'}
              variant={'bordered'}
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              defaultValue={''}
              label={'Password'}
              variant={'bordered'}
              type={'password'}
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button isDisabled={!isValid} fullWidth color={'secondary'} type={'submit'}>
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
