import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Oval } from  'react-loader-spinner'
import css from './App.module.css';

let currentPage = 1;

export class App extends Component{

  state = {
    images: [
      { id: 'id-1', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-2', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-3', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-4', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-5', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-6', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-7', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-8', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-9', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-10', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-11', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
      { id: 'id-12', webformatURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg', largeImageURL: 'https://pixabay.com/get/g55dd041f657dacb24b0808680bb583424d2243cec352e32183aa547de9c57494881e260f6e59cca2059d0c1115a8f0541c4483d14ddce4203d5928b213c14d48cd883fdd7106252745c45ec34fcabc11_640.jpg' },
    ],
    isLoading: false,
    isPopup:false, 
  };

  onSubmit = event => {
    event.preventDefault();
    currentPage = 1; 
    console.log(currentPage);
    event.target.reset();
  }

  onImageClick = (url) => {
    console.log(url);
  }

  onLoadMore = () => {
    currentPage += 1;
    console.log(currentPage);
    this.setState({ isLoading: true }); 
  }

  render() {
    return (
      <main className={css.App}>
        <Searchbar search={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} shouPopup={this.onImageClick} />
        </ImageGallery>
        {this.state.isLoading === false && <Button loadMore={this.onLoadMore} />}
        <Oval
          height={60}
          width={60}
          color="#3f51b5"
          wrapperStyle={{ margin: '0 auto', }}
          wrapperClass=""
          visible={this.state.isLoading}
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