import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/filrer/slice';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleInputChange = e => dispatch(filterContacts(e.target.value));

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter type="text" value={filter} onChange={handleInputChange} />
    </LabelFilter>
  );
};

export default Filter;
