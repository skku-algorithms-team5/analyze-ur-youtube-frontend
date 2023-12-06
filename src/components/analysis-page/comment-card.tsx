import React from 'react';

const CommentCard = ({
  className,
  comment,
  isPositive,
  isRepre,
}: {
  className: string;
  comment: string;
  isPositive: boolean;
  isRepre?: boolean;
}) => {
  const nagativeComment = (
    <div className="badge w-14 h-8 leading-8 bg-red-300 font-bold rounded-md text-base text-red-500 text-center">
      부정
    </div>
  );
  const positiveComment = (
    <div className="badge w-14 h-8 leading-8 bg-green-300 font-bold rounded-md text-base text-green-600 text-center">
      긍정
    </div>
  );
  const repreCommnet = (
    <div className="badge w-14 h-8 leading-8 bg-blue-300 font-bold rounded-md text-base text-blue-600 text-center">
      추천
    </div>
  );

  return (
    <div className={`card min-w-[25.5rem] bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        {isRepre
          ? repreCommnet
          : isPositive
            ? positiveComment
            : nagativeComment}
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
