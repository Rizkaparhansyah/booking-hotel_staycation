import React from "react";
import ImageHero from "assets/images/banner.png";
import ImageHero_ from "assets/images/image 3.jpg";
import Cities from "assets/images/icons/ic_cities.svg";
import Traveler from "assets/images/icons/ic_traveler.svg";
import Treasure from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked(){
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function numberFormat(number){
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
  }
  return (
    <section className="container pt-4 ">
      <div className="row d-flex  align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-4 font-wight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
            We provide what you need to enjoy your holiday with family, time to
            make another memriable moments
          </p>
          <Button
            className="btn px-5 btn-shadow"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row " style={{marginTop: 82}}>
            <div className="col-auto " style={{ marginRight: 35 }}>
              <img src={Traveler} width="36" height="36" alt={`${props.data.travelers}`} />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)}
                <span className="text-gray-500 font-weight-light ">
                  traveler
                </span>
              </h6>
            </div>
            <div className="col-auto " style={{ marginRight: 35 }}>
              <img src={Treasure} width="36" height="36" alt="Treasure" />
              <h6 className="mt-3">
              {numberFormat(props.data.treasure)}
                <span className="text-gray-500 font-weight-light ">
                  treasure
                </span>
              </h6>
            </div>
            <div className="col-auto " style={{}}>
              <img src={Cities} width="36" height="36" alt="Cities" />
              <h6 className="mt-3">
              {numberFormat(props.data.cities)}
                <span className="text-gray-500 font-weight-light ">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{widht: 520, height:410}}>
            <img
              src={ImageHero_}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero}
              alt="Room with frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -10px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
