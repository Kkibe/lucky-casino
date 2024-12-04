import './Slider.css'

export default function Slider() {
  return (
<div className="">
  <div className="main-header pt-lg-3 pt-2 position-absolute container-fluid">
    <nav className="d-flex justify-content-between align-items-center px-md-4 px-2">
      <div className="mian-logo">
        <span className="d-block bg-danger p-1 px-3 text-white shadow">K | Mendano</span>
      </div>
      <div className="d-none d-sm-block">
          <ul className="nav justify-content-end mt-0">
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="#">Link</a>
        </li>
      </ul>
      </div>
      <div className="mobile-menu d-block d-sm-none">
        <a className="nav-link link-light" href="#"><i className="fa-solid fa-bars"></i></a>
      </div>
    </nav>
  </div>
  <div id="mainBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
    <div className="carousel-inner">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-item active" data-bs-interval="7000">
        <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
        <div className="carousel-caption px-md-5">
          <h5>1st slide label</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Some representative placeholder content for the first slide.</p>
          <div className="banner-btn">
            <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Lorem Ipsum</button>
            <button type="button" className="btn btn-success px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Dolor Iseter</button>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption px-md-5">
          <h5>2nd slide label</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Some representative placeholder content for the first slide.</p>
          <div className="banner-btn">
            <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Lorem Ipsum</button>
            <button type="button" className="btn btn-success px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Dolor Iseter</button>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption px-md-5">
          <h5>3rd slide label</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Some representative placeholder content for the first slide.</p>
          <div className="banner-btn">
            <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Lorem Ipsum</button>
            <button type="button" className="btn btn-success px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Dolor Iseter</button>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption px-md-5">
          <h5>4th slide label</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Some representative placeholder content for the first slide.</p>
          <div className="banner-btn">
            <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Lorem Ipsum</button>
            <button type="button" className="btn btn-success px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Dolor Iseter</button>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
        <div className="carousel-caption px-md-5">
          <h5>5th slide label</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Some representative placeholder content for the first slide.</p>
          <div className="banner-btn">
            <button type="button" className="btn btn-secondary px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Lorem Ipsum</button>
            <button type="button" className="btn btn-success px-lg-5 px-md-4 px-2 py-2 rounded-0 border">Dolor Iseter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
