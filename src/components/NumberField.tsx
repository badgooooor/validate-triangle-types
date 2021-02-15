import { error } from "console";

type NumberFieldProps = {
  name: string;
  handleChange: (e: any) => void;
  value: number;
  error: string | undefined;
}

function NumberField({name, handleChange, value}: NumberFieldProps) {
  return (
    <div>
      <input 
        type="number"
        name={name}
        onChange={handleChange}
        value={value}
      />
      {error}
    </div>
  );
}

export default NumberField;
