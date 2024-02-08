const InputWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="w-full md:max-w-[250px]">{children}</div>;

export default InputWrapper;
