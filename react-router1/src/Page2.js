import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'  
import {withRouter} from 'react-router-dom';

class Page2 extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
      <div className="MainForm">
        <div className="HeaderForm">
          <div className="Step">STEP２</div>
          <div className="Title2">以下にお答えください</div>
        </div>
        <div className="StatusForm">
          <div style={{ color: "blue" }}>現在、生命保険に加入されていますか？</div>
          <input type="radio" />はい
          <input type="radio" />いいえ
          <div style={{ color: "blue" }}>現在入院中ですか。または、最近３か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</div>
          <input type="radio" />はい
          <input type="radio" />いいえ
          <div style={{ color: "blue" }}>過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</div>
          <input type="radio" />はい
          <input type="radio" />いいえ
        </div>
      </div>
      <Router>
      <Link to ="/Page1"
        className="NextButton1">前に戻る　≻
      </Link>
      <Link to ="/Page3"
        className="NextButton2">次へ進む　≻
      </Link>
      </Router>
    </div>
    )
  }
}

export default withRouter(Page2)