import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './UserForm.css';
import { IUserFormProps, IUserSubmitData } from './UserForm.types';

const UserForm = (props: IUserFormProps) => {
  const {
    name,
    username,
    email,
    address: { street },
    address: { city },
    address: { zipcode },
    phone,
    website,
  } = props;
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const onSubmit = (data: IUserSubmitData) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className='user-form-container'>
      <div className='user-from-header'>
        <h1>Профиль пользоваетля</h1>
        <input
          value={'Редактировать'}
          className='btn-primary'
          type='button'
          onClick={() => {
            setDisabled(!disabled);
          }}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('name', { value: name, required: true, minLength: 1 })}
        />
        {errors.name && <p>This field is required</p>}
        <p>User name</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('username', { value: username, required: true, minLength: 1 })}
        />
        {errors.username && <p>This field is required</p>}
        <p>E-mail</p>
        <input
          type={'email'}
          disabled={disabled}
          required
          {...register('email', { value: email, required: true })}
        />
        {errors.email && <p>This field is required</p>}
        <p>Street</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('street', { value: street, required: true })}
        />
        {errors.street && <p>This field is required</p>}
        <p>City</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('city', { value: city, required: true })}
        />
        {errors.city && <p>This field is required</p>}
        <p>Zip code</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('zipcode', { value: zipcode, required: true })}
        />
        {errors.zipcode && <p>This field is required</p>}
        <p>Phone</p>
        <input
          type={'tel'}
          disabled={disabled}
          required
          {...register('phone', { value: phone, required: true })}
        />
        {errors.phone && <p>This field is required</p>}
        <p>Website</p>
        <input
          type={'text'}
          disabled={disabled}
          required
          {...register('website', { value: website, required: true })}
        />
        {errors.website && <p>This field is required</p>}
        <p>Comment</p>
        <textarea disabled={disabled} {...register('comment')} />
        {errors.comment && <p>This field is required</p>}
        <input className='btn-primary btn-primary-submit' disabled={disabled} type='submit' />
      </form>
    </div>
  );
};

export default UserForm;
