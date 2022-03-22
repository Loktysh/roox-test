import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

// interface UserCardProps {
//   FunctionComponent<UserCardProps>
// }

const UserCard = (props: any) => {
  console.log(props);
  const {
    id,
    name,
    address: { city },
    company: { name: companyName },
  } = props;
  // const { street, city, zipcode } = props.userData.address;
  return (
    <>
      <div className='card-container'>
        <div className='card-row'>
          <p className='card-text secondary-text'>ФИО:</p>
          <p className='card-text primary-text'>{name}</p>
        </div>
        <div className='card-row'>
          <p className='card-text secondary-text'>город:</p>
          <p className='card-text primary-text'>{city}</p>
        </div>
        <div className='card-row'>
          <p className='card-text secondary-text'>компания:</p>
          <p className='card-text primary-text'>{companyName}</p>
          <Link to={id.toString()}>Подробнее</Link>
        </div>
      </div>
    </>
  );
};

export default UserCard;