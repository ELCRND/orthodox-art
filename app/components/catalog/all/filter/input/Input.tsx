type Props = {
  isChecked: (key: string, value: string) => boolean;
  updateFilters: (key: string, value: string) => void;
  type: string;
  name: string;
  selectType: string;
  selectValue: string;
};

const Input = ({
  isChecked,
  updateFilters,
  type,
  name,
  selectType,
  selectValue,
}: Props) => {
  return (
    <>
      <input
        type={type}
        id={`${selectType}-${selectValue}`}
        name={name}
        checked={isChecked(selectType, selectValue)}
        onChange={() => updateFilters(selectType, selectValue)}
      />
    </>
  );
};

export default Input;
