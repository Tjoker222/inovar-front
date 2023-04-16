interface DefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen duration-300">
        <div className="w-full flex flex-col gap-xl items-center">
          <div className="w-full flex flex-col gap-base items-center mt-[10rem]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
