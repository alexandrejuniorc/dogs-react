import { Feed } from '../components/feed/Feed';
import { Head } from './helper/Head';

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};
