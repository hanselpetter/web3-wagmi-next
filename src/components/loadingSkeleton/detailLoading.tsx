const DetailLoading = () => {
  return (
    <div className="pt-20 lg:pt-[140px] w-[calc(100%-40px)] xl:max-w-[1280px] mx-5 xl:mx-auto">
      <div className="animate-pulse bg-primary-200 rounded w-[180px] h-10" />
      <div className="flex gap-4 items-center">
        <div className="animate-pulse bg-primary-200 rounded w-[120px] h-5 my-2" />
      </div>
      <div className="flex flex-col lg:flex-row mt-2 gap-[56px] pb-20">
        <div className="w-full lg:w-[520px] grid grid-cols-1 gap-5">
          <div className="flex gap-7">
            <div className="animate-pulse bg-primary-200 w-[160px] lg:w-[233px] h-[160px] lg:h-[233px] my-2 rounded-xl" />
            <div className="">
              <div className="flex gap-4 mt-7 flex-col">
                <div className="animate-pulse bg-primary-200 rounded w-[180px] h-4" />
                <div className="animate-pulse bg-primary-200 rounded w-[120px] h-4" />
                <div className="animate-pulse bg-primary-200 rounded w-[160px] h-4" />
              </div>
            </div>
          </div>

          <div className="animate-pulse bg-primary-200 rounded w-full h-4" />
          <div className="animate-pulse bg-primary-200 rounded w-full h-4" />
          <div className="animate-pulse bg-primary-200 rounded w-full h-4" />
        </div>
        <div className="w-full lg:w-[calc(100%-574px)]">
          <div className="animate-pulse bg-primary-200 rounded w-full h-4 my-4" />
          <div className="animate-pulse bg-primary-200 rounded w-full h-4 my-4" />
          <div className="animate-pulse bg-primary-200 rounded w-full h-4 my-4" />
          <div className="animate-pulse bg-primary-200 rounded w-full h-4 my-4 mt-10" />
          <div className="animate-pulse bg-primary-200 rounded w-3/4 h-4 my-4" />
          <div className="animate-pulse bg-primary-200 rounded w-1/2 h-4 my-4" />
        </div>
      </div>
    </div>
  );
};

export default DetailLoading;
