import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside>
        <div className="card-item">
          <div className="name">Qijun Yu</div>
          <div className="title">Front-end developer</div>
        </div>
        <div className="card-item">
          <div class="title">Contact</div>
          <ul>
            <li className="info-item">
              <div className="label">Address</div>
              <div className="info">Hangzhou, China 310019</div>
            </li>
            <li>
              <div className="label">Phone</div>
              <div className="info">15558190923</div>
            </li>
            <li>
              <div className="label">E-mail</div>
              <div className="info">force2008@gmail.com</div>
            </li>
          </ul>
        </div>
        <div className="card-item">
          <ul>
            <li>HTML/CSS</li>
            <li>javascript,typescript & debug tools</li>
            <li>framework with react, vue, prototype js, nodejs with express or koa</li>
            <li>ajax or axios with network data</li>
            <li>optimize pages</li>
            <li>git</li>
          </ul>
        </div>
      </aside>
      <article>
        <div className="description">
        Proficiency in using front-end development tools, with HTML, through javascript,html & css language to convert the design into a page, and deploy the APP to the server.
I can optimize the performance of the page to improve the cose of FCP & FMP in order to present page to as faster as I can.
Have nodejs development capabilities, simple operations on database data through CURD operations, and get scratch online page data through nodejs headless browsers.
I also can develop simple desktop applications through electron
        </div>
        <div className="worklife">
          <div className="life-item">
            <div className="years">Mar 2021 - July 2023</div>
            <div class="job-detail">
              <div className="title">Frond-end developer</div>
              <div className="company">Bytedance, Hangzhou</div>
              <ul className="workitem">
                <li>Develop on classroom for teaching online, write pages in HTML, place HTML static resource in CEF(Chromium Embedded Framework),use native interface to invoke native functions </li>
                <li>Develop desk application called lark  with HTML technic</li>
              </ul>
            </div>
          </div>
          <div className="life-item">
            <div className="years">Sep 2019 - Feb 2021</div>
            <div class="job-detail">
              <div className="title">Frond-end developer</div>
              <div className="company">Alibaba, Hangzhou</div>
              <ul className="workitem">
                <li>Develop on classroom for teaching online, write pages in HTML, place HTML static resource in CEF(Chromium Embedded Framework),use native interface to invoke native functions </li>
                <li>Develop desk application called lark  with HTML technic</li>
              </ul>
            </div>
          </div>
          <div className="life-item">
            <div className="years">May 2009 - Sep 2019</div>
            <div class="job-detail">
              <div className="title">Frond-end developer</div>
              <div className="company">Netease, Hangzhou</div>
              <div className="workitem">
                
              </div>
            </div>
          </div>
          <div className="life-item">
            <div className="years">Jul 2005 - May 2009</div>
            <div class="job-detail">
              <div className="title">Report developer</div>
              <div className="company">StateStreet, Hangzhou</div>
              <div className="workitem">
                
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
