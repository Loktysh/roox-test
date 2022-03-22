import { InputGroup, FormControl, Button } from 'react-bootstrap';

function Search() {
  return (
    <InputGroup>
      <FormControl
        placeholder='Type here...'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
      />
      <Button variant='primary' id='button-addon2'>
        Search
      </Button>
    </InputGroup>
  );
}

export default Search;
