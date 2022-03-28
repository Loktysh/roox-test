interface IUserAddress {
  street: string;
  city: string;
  zipcode: string;
}

interface IUserFormProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IUserAddress;
}

interface IUserSubmitData extends IUserAddress, IUserFormProps {}

export type { IUserFormProps, IUserSubmitData };
