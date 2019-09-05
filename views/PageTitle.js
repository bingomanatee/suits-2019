function scn(a, b){
  return a === b ? 'active' : ''
}

function PageTitle(props) {
  console.log('props: ', props);
  const {active} = props;
  return <header>
    <div id="logo">
      <img className="large" src="/static/img/Logo.svg"/>
      <img className="medium" src="/static/img/Logo-sm.svg"/>
    </div>
    <div id="header-menu">
      <span className="small"><b>LGE</b></span>
      <span className={scn(active, 'home')}>
        <a href="/">
      <img className="large" src="/static/img/home-icon.svg"/>
      <img className="not-large" src="/static/img/home-icon-sm.svg"/>
        </a>
    </span>
      <span className={scn(active, 'characters')}><a href="/characters">Characters</a></span>
      <span className={scn(active, 'contests')}><a href="/contests">Contests</a></span>
      <span className={scn(active, 'adventures')}><a href="/adventures">Adventures</a></span>
    </div>
    <div id="header-title">
      <div className="lead-in not-small">
        Wonderland Labs Presents
      </div>
      <div className="title not-small">
        SUITS
      </div>
    </div>
  </header>
}

export default PageTitle;
