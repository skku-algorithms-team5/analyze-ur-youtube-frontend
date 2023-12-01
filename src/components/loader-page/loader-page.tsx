import React, { useEffect, useState } from 'react';
import './loader-page.css';

const LoaderPage = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [fade, setFade] = useState(true); // 새로운 상태 'fade' 추가

  useEffect(() => {
    const quotes = [
      '댓글을 분석하는 유튜버의 78%가 채널의 성장을 겪습니다',
      '좋은 댓글들을 보며 행복해지세요!',
      '나쁜 댓글들은 성장의 발판으로 삼자구요!',
      '"모든 성장의 비밀은 자신을 벗어나는데 있습니다." - 해리 오버스트리트',
      '당신은 성장할거에요! 반드시!',
      '댓글을 또 하나의 선생님입니다',
      '오래 걸리죠? 그만큼 당신의 채널을 성장시킬 수 있습니다!',
      '악플러의 68%가 단명한다고 합니다. 아마도요!',
      '"불편? 불편하면 자세를 고쳐 앉아!" - 김해 김찬호',
      '슈퍼샤~ 슈퍼샤~',
      '워춰 ETA 워춰 ETA ',
      // 여기에 추가 명언을 넣으세요.
    ];

    const updateQuote = () => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFade(true); // 페이드 인 시작
      }, 500); // 페이드 아웃 시간 동안 대기
    };

    updateQuote();
    const interval = setInterval(updateQuote, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-16">
      <div className="flex flex-col items-center">
        <div className="loader width-[150px] height-[150px] mb-24"></div>
        <p
          className={`${'text-base text-center font-mono text-[#3f3f46]'} ${
            fade
              ? 'transition-opacity duration-150 opacity-100'
              : 'transition-opacity duration-150 opacity-0'
          }`}
        >
          {currentQuote}
        </p>
      </div>
    </div>
  );
};

export default LoaderPage;
