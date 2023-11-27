import React from 'react';

const AuyPage = () => {
  const debugBorder = 'border-[1px] border-black';
  return (
    <div className="bg-neutral-200 w-full h-[100vh] p-2">
      <div className={`bg-white w-80 h-32 p-4 m-2 rounded-lg ${debugBorder}`}>
        <div>User-name</div>
        <div className={`w-full whitespace-normal`}>
          example comments
          dflaghlagndkjfdhgsgljfdsgkflhglfsdhlsfhkljgfsljdklfjgdlfagfdskjfsdhlsfd
        </div>
      </div>
      <div className="bg-white w-80 h-32 p-4 m-2 rounded-lg">g</div>
      <div className="bg-white w-80 h-32 p-4 m-2 rounded-lg">g</div>
    </div>
  );
};

export default AuyPage;
