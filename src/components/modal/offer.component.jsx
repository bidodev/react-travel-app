import React from "react";
import Modal from "react-modal";
import "./offer.component.styles.scss";
import { useSelector, useDispatch } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

Modal.setAppElement("#root");
function ShowModal({ modalIsOpen, closeModal, data }) {
  const {
    id,
    productName,
    cover,
    extraImgs,
    description,
    country,
    prices,
    type
  } = data;

  /**
   * This functions toogle the favorite on redux store.
   * If it's already on the the store, then remove else add.
   */

  const dispatch = useDispatch();
  const addWishList = (offerID, productName) => {
    //const isOnFavorites = favoritesList.some((favorites) => favorites.id === offerID)
    dispatch({
      type: "TOGGLE FAVORITE",
      payload: { id: offerID, name: productName },
    });
  };

  //Load the list of the Favorites
  const favoritesList = useSelector((state) => state.favoritesList);
  const isOnFavorites = favoritesList.some((favorites) => favorites.id === id);

  //configurations for the carousel..
  const modalConfig = {
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: false,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 200,
    selectedItem: 0,
    interval: 60000,
    transitionTime: 400,
    swipeScrollTolerance: 5,
  };

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Offers Modal"
        className="Modal"
        overlayClassName="overlay"
      >
        <div className="offers-item">
          <div className="offers-item-title">
            <span>{productName}</span>
            <div>
              <ion-icon
                name={isOnFavorites ? "bookmark" : "bookmark-outline"}
                onClick={() => addWishList(id, productName)}
              ></ion-icon>
              <ion-icon
                name="close-circle-outline"
                onClick={closeModal}
              ></ion-icon>
            </div>
          </div>

          <Carousel {...modalConfig}>
            {extraImgs
              ? [cover, ...extraImgs].map(({ url, description }) => (
                  <div key={Math.ceil(Math.random())}>
                    <img src={`./img/${type}/${url}`} alt={description} />
                    <p className="legend">{description}</p>
                  </div>
                ))
              : null}
          </Carousel>

          <div className="exp-infos">
            <li>
              <ion-icon name="navigate-outline"></ion-icon>
              {country}
            </li>
            <li>
              <ion-icon name="cash-outline"></ion-icon>
              {prices}
            </li>
          </div>
          <p className="description">{description}</p>
        </div>
      </Modal>
  );
}

//to be fixed

export default ShowModal;
