import React from 'react';
import PullDownYear from './PullDownYear';
import PullDownMonth from './PullDownMonth';
import PullDownDay from './PullDownDay';

const FirstForm = (props) => {
  return (
    <div>
      <div className="MainForm">
        <div className="HeaderForm">
          <div className="Step">STEP１</div>
          <div className="Title">お客様の情報を入力してください</div>
        </div>
        <div className="StatusForm">
          <div style={{ color: "blue" }}>-性別-</div>
          <input type="radio" />男性
          <input type="radio" />女性
          <div style={{ color: "blue" }}>-生年月日-</div>
          <div className="MainPullDown">
            <PullDownYear className="SubPullDown"
              years={props.years}
              onChange={props.onChange}
            />
            <div className="time">年</div>
            <PullDownMonth className="SubPullDown"
              months={props.months}
              onChange={props.onChange}
            />
            <div className="time">月</div>
            <PullDownDay className="SubPullDown"
              days={props.days}
              onChange={props.onChange}
            />
            <div className="time">日</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstForm;