import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const Article1 = lazy(() => import('../pages/blog/articles/tenda-sanfonada-ou-chapeu-de-bruxa'));
const Article2 = lazy(() => import('../pages/blog/articles/tendencia-cristal-tendas-transparentes-casamentos-luxo'));
const Article3 = lazy(() => import('../pages/blog/articles/matematica-comprar-ou-alugar-tendas'));
const Article4 = lazy(() => import('../pages/blog/articles/como-evitar-mofo-tendas-manutencao'));
const Article5 = lazy(() => import('../pages/blog/articles/agronegocio-tendas-personalizadas-dias-campo'));
const CadastroPedido = lazy(() => import('../pages/cadastro-pedido/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/agronegocio-tendas-personalizadas-dias-campo',
    element: <Article5 />,
  },
  {
    path: '/blog/como-evitar-mofo-tendas-manutencao',
    element: <Article4 />,
  },
  {
    path: '/blog/matematica-comprar-ou-alugar-tendas',
    element: <Article3 />,
  },
  {
    path: '/blog/tenda-sanfonada-ou-chapeu-de-bruxa',
    element: <Article1 />,
  },
  {
    path: '/blog/tendencia-cristal-tendas-transparentes-casamentos-luxo',
    element: <Article2 />,
  },
  {
    path: '/cadastro-pedido',
    element: <CadastroPedido />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
