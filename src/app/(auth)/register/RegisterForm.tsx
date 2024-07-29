'use client';

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/app/actions/authActions';
import { handleFormServerErrors } from '@/lib/util';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);

    if (result.status === 'success') {
      console.log('User registered successfully');
    } else {
      // setError は React Hook Form の useForm フックから取得した関数で、
      // フォームの特定のフィールドにエラーを設定するために使用される
      handleFormServerErrors(result, setError);
    }
  };

  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div color={'flex flex-col gap-2 items-center'}>
          <div className={'flex flex-row items-center gap-3'}>
            <GiPadlock size={30} />
            <h1 className={'text-3xl font-semibold'}>Register</h1>
          </div>
          <p color={'text-neutral-500'}>Welcome to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'space-y-4'}>
            <Input
              defaultValue={''}
              label={'Name'}
              variant={'bordered'}
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as string}
            />
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
            {errors.root?.serverError && <p className={'text-danger text-sm'}>{errors.root.serverError.message}</p>}
            <Button isLoading={isSubmitting} isDisabled={!isValid} fullWidth color={'secondary'} type={'submit'}>
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
