export default function Input({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  isValid,
}) {
  const validation = (
    <small className=" text-strawberryRed ">This field is required</small>
  );

  return (
    <>
      <div>
        <div className="flex justify-between">
          <label htmlFor={id} className=" text-xs sm:text-sm   text-marineBlue">
            {label}
          </label>
          {!isValid && validation}
        </div>
        <input
          onChange={onChange}
          className = {`${!isValid ? 'border-strawberryRed' : 'border-lightGray' } py-2 px-4 w-full border-[1px] rounded-md sm:text-[18px] sm:font-medium sm:py-3 sm:mt-1 hover:cursor-pointer `}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </>
  );
}
