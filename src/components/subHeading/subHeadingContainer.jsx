const SubHeadingContainer = () => {
  return (
    <>
      <div className="   flex flex-col-reverse md:flex-row md:flex  w-[70%] mx-auto h-[80%] md:items-center  ">
        <div className="md:w-[40%] w-full">
          <img src="/section-img-1.png" alt="" />
        </div>

        <div className=" max-w-prose py-5 space-y-4 text-center md:text-left">
          <p className=" text-orange font-bold text-xl">Create an Account</p>
          <h2 className="uppercase font-bold text-2xl ">
            Create/login to an existing
            <br />
            account to get started
          </h2>
          <p className="text-gray-600 ">
            An account is created with your email
            <br />
            and a desired password
          </p>
        </div>
      </div>
    </>
  );
};

export default SubHeadingContainer;
