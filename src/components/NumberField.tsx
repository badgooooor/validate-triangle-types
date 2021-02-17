type NumberFieldProps = {
  name: string;
  handleChange: (e: any) => void;
  value: number;
  error: string | undefined;
}

function NumberField({name, handleChange, value, error}: NumberFieldProps) {
  return (
    <div>
      <p>{name}</p>
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
