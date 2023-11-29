const AnalysisCard = ({ analysis }: { analysis: string }) => {
  return (
    <div className="card w-1/2 min-w-[24.5rem] min-h-[280px] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            &nbsp;AI Youtube Consultant
            <p className="text-xs text-gray-400 font-normal">
              &nbsp;&nbsp;19대장
            </p>
          </div>
        </h2>
        <p className="mt-2">{analysis}</p>
      </div>
    </div>
  );
};

export default AnalysisCard;
