import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import { Oval } from 'react-loader-spinner';
import {fetcImages} from "../../api/api";
import css from './App.module.css';

export class App extends Component{

  state = {
    error: [],
    images: [],
    imagesTotal: 0,
    page: 1,
    request: '',
    isLoading: false,
    isPopup: false,
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


  onSubmit = event => {
    event.preventDefault();
    this.setState({
      page: 1,
      request: event.target.search.value,
    });
    event.target.reset();
  };

  onImageClick = (url) => {
    return url;
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, images, isLoading, imagesTotal} = this.state;

    return (
      <main className={css.App}>
        <Searchbar search={this.onSubmit} />
        {
          error.length > 0 && <Error errorText={error} />
        }
        {
          (images.length > 0 && error.length <= 0) && 
          <ImageGallery>
            <ImageGalleryItem images={images} shouPopup={this.onImageClick} />
          </ImageGallery>
        }
        {
          (!isLoading && error.length <= 0 && images.length < imagesTotal) &&
          <Button loadMore={this.onLoadMore} />
        }
        <Oval
          height={60}
          width={60}
          color="#3f51b5"
          wrapperStyle={{ margin: '0 auto', }}
          wrapperClass=""
          visible={isLoading}
          ariaLabel='oval-loading'
          secondaryColor="#3f51b55c"
          strokeWidth={10}
          strokeWidthSecondary={10}
        />
      </main>
    );
  };
};

export default App;