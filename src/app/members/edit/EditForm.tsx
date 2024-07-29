'use client';

import { Member } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MemberEditSchema, memberEditSchema } from '@/lib/schemas/memberEditSchema';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useEffect } from 'react';

type Props = {
  member: Member;
};

const EditForm = ({ member }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty, isSubmitting, errors },
  } = useForm<MemberEditSchema>({ resolver: zodResolver(memberEditSchema), mode: 'onTouched' });

  useEffect(() => {
    if (member) {
      reset({ name: member.name, description: member.description, city: member.city, country: member.country });
    }
  }, [member, reset]);

  const onSubmit = (data: MemberEditSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col space-y-4'}>
      <Input
        label={'Name'}
        variant={'bordered'}
        {...register('name')}
        defaultValue={member.name}
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Textarea
        label={'Description'}
        variant={'bordered'}
        {...register('description')}
        defaultValue={member.description}
        isInvalid={!!errors.description}
        errorMessage={errors.description?.message}
        minRows={6}
      />
      <div className={'flex flex-row gap-3'}>
        <Input
          label={'City'}
          variant={'bordered'}
          {...register('city')}
          defaultValue={member.city}
          isInvalid={!!errors.city}
          errorMessage={errors.city?.message}
        />
        <Input
          label={'Country'}
          variant={'bordered'}
          {...register('country')}
          defaultValue={member.country}
          isInvalid={!!errors.country}
          errorMessage={errors.country?.message}
        />
      </div>
      <Button
        type={'submit'}
        className={'flex self-end'}
        variant={'solid'}
        isDisabled={!isValid || !isDirty}
        isLoading={isSubmitting}
        color={'secondary'}
      >
        Update profile
      </Button>
    </form>
  );
};

export default EditForm;
