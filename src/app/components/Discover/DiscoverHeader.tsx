import { useState } from "react";

const DiscoverHeader = () => {
  const [filters, setFilters] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
    { id: 5, checked: false },
    { id: 6, checked: false },
    { id: 7, checked: false },
    { id: 8, checked: false },
    { id: 9, checked: false },
    { id: 10, checked: false },
  ]);

  const checkIndividual = (id: number) => {
    const newArr = filters.map((filter) =>
      filter.id === id ? { ...filter, checked: !filter.checked } : filter
    );
    setFilters(newArr);
  };

  const checkAll = () => {
    const allChecked = filters.every((f) => f.checked);
    const newArr = filters.map((filter) => ({
      ...filter,
      checked: !allChecked,
    }));
    setFilters(newArr);
  };
  return <div>DiscoverHeader</div>;
};

export default DiscoverHeader;
