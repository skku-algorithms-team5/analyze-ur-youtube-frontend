const BarGraph = () => {
  return (
    <div className="card bg-base-100 w-1/2 min-w-[24.5rem] shadow-xl">
      <div className="card-body">
        부정적인 댓글
        <progress
          className="progress progress-error w-full h-3"
          value={33}
          max={100}
        />
        긍정적인 댓글
        <progress
          className="progress progress-success w-full h-3"
          value={57}
          max={100}
        />
      </div>
    </div>
  );
};

export default BarGraph;
