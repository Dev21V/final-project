import React from 'react'; // eslint-disable-line no-unused-vars
import '../css/total.css';
import '../css/board.css';
import '../css/variables.css';
import $ from 'jquery'; // eslint-disable-line no-unused-vars
import "../script/board.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import "../script/custom.js";

function NoticeBoard() {
  return (
    <div>
      <section className="board-place">
        <div className="board-notice">
          <i className="bi bi-megaphone-fill"></i>
          <a href="/board/notice" className="active">공지사항</a>
        </div>
        <div className="search-area">
          <div className="search">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className="write-button">
            <a href="/writePost">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <ul className="borad-main">
          <li className="board-content">
            <div className="board-info">
              <div className="board-title">
                <span>공지사항</span>
                <a href="/postContent">
                  왜들 그리 다운돼있어? 뭐가 문제야 say something 분위기가 겁나 싸해 요새는 이런 게 유행인가
                </a>
              </div>
              <div className="board-user-log">
                <span>글쓴이 생존전문가김병철</span>
                <span>시간 23-08-21 10:40</span>
                <span>조회수 15</span>
              </div>
            </div>
            <a href="/postContent" className="board-comment">
              <span>10</span>
              <span>댓글</span>
            </a>
          </li>
          {/* 다른 게시글들 */}
        </ul>
        <div className="board-paging">
          <a href="#none" className="paging-arrow left">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a href="#none" className="paging-ball active">1</a>
          <a href="#none" className="paging-ball">2</a>
          <a href="#none" className="paging-ball">3</a>
          <a href="#none" className="paging-ball">4</a>
          <a href="#none" className="paging-ball">5</a>
          <a href="#none" className="paging-arrow right">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default NoticeBoard;
