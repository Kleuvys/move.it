import { useEffect } from 'react';
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;

/* 2
  Não colocamos o countdown.provider aqui no _app pois, aqui ficam apenas
  os componentes globais que devem estar acessíveis para todas as telas, ou
  a grande maioria, da aplicação
*/

/* 3
  retiramos o challengesProvider para pois com a utilização dos cookies podemos
  receber as props de getServerSideProps
*/


/* 1
  Tudo que irá refletir em todas as páginas
  fica neste arquivo
*/