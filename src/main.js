import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import fetchImages from './js/pixabay-api';
import createMarkup from './js/render-functions';
import iconError from './img/icon-error.svg';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search"]');
const imageList = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.more');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

iziToast.settings({
  messageSize: 15,
  messageColor: '#fff',
  messageLineHeight: 20,
  iconUrl: `${iconError}`,
  position: 'topRight',
  timeout: 7000,
  closeOnClick: true,
  maxWidth: 350,
  backgroundColor: 'rgb(239, 64, 64)',
});

let gallery = new SimpleLightbox('.gallery .gallery-link');
let searchValue = '';
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', () => createGallery());

async function handleSubmit(event) {
  event.preventDefault();
  searchValue = searchInput.value.trim();
  loadMoreBtn.classList.add('hide');

  if (!searchValue) {
    iziToast.error({
      message:
        'Search field cannot be empty. Please enter a keyword to search.',
    });
    return;
  }

  imageList.innerHTML = '';
  loader.style.display = 'block';

  await createGallery();

  console.log(totalHits);

  if (totalHits > 15) {
    loadMoreBtn.classList.remove('hide');
  }

  form.reset();
}

async function createGallery() {
  try {
    const result = await fetchImages(searchValue);

    if (!result) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.style.display = 'none';
      loadMoreBtn.classList.add('hide');
      totalHits = 0;
      return;
    }

    const { hits, totalHits: newTotalHits } = result;
    totalHits = newTotalHits;

    const markup = createMarkup(hits);
    imageList.insertAdjacentHTML('beforeend', markup);
    gallery.refresh();

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (imageList.children.length >= totalHits) {
      loadMoreBtn.classList.add('hide');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    iziToast.error({
      message: `As error occured: ${err.message}`,
    });
    loadMoreBtn.classList.add('hide');
  } finally {
    loader.style.display = 'none';
  }
}
