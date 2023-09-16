import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import { Oval } from 'react-loader-spinner';
import {fetcImages} from "../../api/api";
import css from './App.module.css';
import Popup from 'components/Popup/Popup';

export class App extends Component{

  state = {
    error: [],
    images: [],
    imagesTotal: 0,
    page: 1,
    modalImage: '',
    request: '',
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, request } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({
        isLoading: true,
        error: [],
      });
      try {
        const newImages = await fetcImages(page, request);
        newImages.totalHits > 0 ?
          this.setState({ imagesTotal: newImages.totalHits }) :
          this.setState({ error: ['Sorry','There are no images matching your search query. Please try again'] });
        page === 1 ?
          this.setState({ images: newImages.hits }) :
          this.setState({ images: [...prevState.images, ...newImages.hits] });
      } catch (error) {
        this.setState({ error: [error.message, error.request.responseText]});
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  closeModal = () => {
    this.setState({showModal: false});
  };

  getFormRequest = newRequest => {
    this.setState({request: newRequest, page: 1});
    this.state.request !== newRequest && this.setState({images:[]});
  };

  getFormError = formError => {
    this.setState({error: formError});
  };

  onImageClick = (url) => {
    this.setState({modalImage: url, showModal: true});
  }

  onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}));
  };

  render() {
    const { error, images, isLoading, showModal, imagesTotal, modalImage } = this.state;

    return (
      <main className={css.App}>
        <Searchbar onSubmit={this.getFormRequest} onError={this.getFormError} />
        {error.length > 0 && <Error errorText={error} />}
        {(images.length > 0 && error.length <= 0) && 
          <ImageGallery>
            <ImageGalleryItem images={images} shouPopup={this.onImageClick} />
          </ImageGallery>
        }
        {(!isLoading && error.length <= 0 && images.length < imagesTotal) && <Button loadMore={this.onLoadMore} />}
        <Oval
          height={60}
          width={60}
          color="#5c91b1"
          wrapperStyle={{ marginTop: '20px', }}
          visible={isLoading}
          ariaLabel='oval-loading'
          secondaryColor="#d0d7dd"
          strokeWidth={8}
          strokeWidthSecondary={8}
        />
        {showModal && <Popup url={modalImage} onClose={this.closeModal} />}
      </main>
    );
  };
};

export default App;