import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import './UserForm.css';

const UserForm = (props: any) => {
  const {
    name,
    username,
    email,
    address: { street },
    address: { city },
    address: { zipcode },
    phone,
    website,
  } = props.data;
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });
  const onSubmit = data => {
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
          disabled={disabled ? true : false}
          required
          {...register('name', { value: name, required: true, minLength: 1 })}
        />
        {errors.name && <p>This field is required</p>}
        <p>User name</p>
        <input
          type={'text'}
          disabled={disabled ? true : false}
          required
          {...register('username', { value: username, required: true, minLength: 1 })}
        />
        {errors.username && <p>This field is required</p>}
        <p>E-mail</p>
        <input
          type={'email'}
          disabled={disabled ? true : false}
          required
          {...register('email', { value: email, required: '123123123' })}
        />
        {errors.email && <p>This field is required</p>}
        <p>Street</p>
        <input
          type={'text'}
          disabled={disabled ? true : false}
          required
          {...register('street', { value: street, required: true })}
        />
        {errors.street && <p>This field is required</p>}
        <p>City</p>
        <input
          type={'text'}
          disabled={disabled ? true : false}
          required
          {...register('city', { value: city, required: true })}
        />
        {errors.city && <p>This field is required</p>}
        <p>Zip code</p>
        <input
          type={'text'}
          disabled={disabled ? true : false}
          required
          {...register('zipcode', { value: zipcode, required: true })}
        />
        {errors.zipcode && <p>This field is required</p>}
        <p>Phone</p>
        <input
          type={'tel'}
          disabled={disabled ? true : false}
          required
          {...register('phone', { value: phone, required: true })}
        />
        {errors.phone && <p>This field is required</p>}
        <p>Website</p>
        <input
          type={'text'}
          disabled={disabled ? true : false}
          required
          {...register('website', { value: website, required: true })}
        />
        {errors.website && <p>This field is required</p>}
        <p>Comment</p>
        <textarea disabled={disabled ? true : false} {...register('comment')} />
        {errors.comment && <p>This field is required</p>}
        <input
          className='btn-primary btn-primary-submit'
          disabled={disabled ? true : false}
          type='submit'
        />
      </form>
    </div>
  );
};

export default UserForm;
