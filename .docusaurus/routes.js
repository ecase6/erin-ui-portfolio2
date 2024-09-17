import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/erin-ui-portfolio2/about-me',
    component: ComponentCreator('/erin-ui-portfolio2/about-me', '2c9'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/blog',
    component: ComponentCreator('/erin-ui-portfolio2/blog', '9c2'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/blog/archive',
    component: ComponentCreator('/erin-ui-portfolio2/blog/archive', 'da8'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/blog/example-blog-post',
    component: ComponentCreator('/erin-ui-portfolio2/blog/example-blog-post', '15c'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/blog/tags',
    component: ComponentCreator('/erin-ui-portfolio2/blog/tags', 'b15'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/blog/tags/freeform',
    component: ComponentCreator('/erin-ui-portfolio2/blog/tags/freeform', 'fe2'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/contact',
    component: ComponentCreator('/erin-ui-portfolio2/contact', '966'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/markdown-page',
    component: ComponentCreator('/erin-ui-portfolio2/markdown-page', '6c2'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/projects',
    component: ComponentCreator('/erin-ui-portfolio2/projects', '2cd'),
    exact: true
  },
  {
    path: '/erin-ui-portfolio2/',
    component: ComponentCreator('/erin-ui-portfolio2/', '5f9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
