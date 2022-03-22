/* eslint-disable @typescript-eslint/no-explicit-any */
export function Product(props: any) {
  const { extended_name, image } = props;
  return (
    <div>
      <h1>{extended_name}</h1>
      <img src={image} alt='' />
    </div>
  );
}
