const BarGraph = ({
  pos_ratio,
  neg_ratio,
}: {
  pos_ratio: number;
  neg_ratio: number;
}) => {
  return (
    <div className="card bg-base-100 w-1/2 min-w-[24.5rem] shadow-xl">
      <div className="card-body">
        <span>
          긍정적인 댓글{' '}
          <span className="text-[gray]">({pos_ratio * 100}%)</span>
        </span>
        <progress
          className="progress progress-success w-full h-3"
          value={pos_ratio * 100}
          max={100}
        />
        <span>
          부정적인 댓글{' '}
          <span className="text-[gray]">({neg_ratio * 100}%)</span>
        </span>
        <progress
          className="progress progress-error w-full h-3"
          value={neg_ratio * 100}
          max={100}
        />
      </div>
    </div>
  );
};

export default BarGraph;
