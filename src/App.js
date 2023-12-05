import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import nav_img from './img/img_nav.png';
import header_img from './img/image_centre.png';
import only_travaux from './img/only_travaux.png';
import facebook_img from './img/fb.png';
import insta_img from './img/insta.png';
import linkedin_img from './img/linkedin.png';
import prise_img from './img/prise.png';
import 'typeface-roboto';

function App() {
  return (
    <div className="test">
      <nav className="navbar navbar-light navbar_styles">
        <div className="container-fluid">
          <img src={nav_img} className=" ms-auto me-auto img_nav" alt="" />
        </div>
      </nav>
      <div className='header text-center'>
        <img src={header_img} className="img_header" alt="" />
      </div> 
      <div className='content text-center'>
        <h1 className='title_content'>ÉCOLES, COLLÈGES, LYCÉES <br />
          FINANCEZ VOS PROJETS SCOLAIRES</h1> <br /><br />
        <h4 className='title_content_2'>ADOPTEZ UN GESTE ÉCOLOGIQUE ! <br />
          SOYEZ BRANCHÉ RECYCLÉ VOS CLABES D'ALIMENTATION</h4> <br /><br /><br />
        <a href='#' className='btn_decouvre'><b>JE DÉCOUVRE</b></a>
        <img src={prise_img} className="img_prise" alt="" />
      </div>
      <div className='footer'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={only_travaux} className="only_travaux align_only_travaux" alt="" />
          </div>
          <div className='col-md-3 text-center'>
            <p className='contact_text'>contact@onlytravaux/fr</p>
          </div>
          <div className='col-md-3'>
            <p className='contact_text me-auto'>07 80 90 41 50</p>
          </div>
          <div className='col-md-3'>
            <p className='mentions_legales'>Mention légales</p>
            <table className="table_mentions">
              <tr className='tr_rs'>
                <td className=''><a href="#"><img src={facebook_img} className="logo_rs" alt="Facebook" /></a></td>
                <td className=''><a href="#"><img src={insta_img} className="logo_rs" alt="Instagram" /></a></td>
                <td className=''><a href="#"><img src={linkedin_img} className="logo_rs" alt="Linkedin" /></a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
