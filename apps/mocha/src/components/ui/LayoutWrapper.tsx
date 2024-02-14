const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex gap-4 flex-col md:flex-row">{children}</div>;
};

export default LayoutWrapper;
