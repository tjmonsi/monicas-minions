import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import '@polymer/polymer/lib/elements/dom-repeat';
import 'prpl-fire-module/components/image-lazy-loader';
import 'prpl-fire-module/components/fire-article';
import './index.html';
const bannerImage = 'https://firebasestorage.googleapis.com/v0/b/prpl-fire-blog.appspot.com/o/project-related-images%2Foriginal%2F4269497619_7232f17793_z%20(1).jpg?alt=media&token=62aeeca8-aca5-4b35-9aea-da32de9d7b89';
const thumbnailBannerImage = 'https://firebasestorage.googleapis.com/v0/b/prpl-fire-blog.appspot.com/o/project-related-images%2Fthumbnail%2Frsz_4269497619_7232f17793_z%20(2)%20(1).jpg?alt=media&token=65c9701a-e400-4516-886a-868755df305f';
const articles = [
  {
    title: 'My Thoughts, Experiences, and Notes on the development of the GDG Philippines Devfest site',
    summary: 'I was tasked to do the GDG Philippines Devfest Site for this 10th year GDG Devfest Philippines. The event will be big because this is the…',
    date: 'Nov 1',
    read: 13,
    image: 'https://cdn-images-1.medium.com/max/800/1*aeuDOu4aKcwfgo1ta83B4g.png',
    avatar: 'https://cdn-images-1.medium.com/fit/c/32/32/0*H2-pu-Hmgmdhw2sp.jpg',
    name: 'TJ Monserrat'
  },
  {
    title: 'Going back to Web Basics: Structuring HTML',
    summary: 'As web developers, there’s no escaping the fact that we have typed HTML since we did our first web development tutorial or published our…',
    date: 'Sep 23',
    read: 9,
    image: 'https://cdn-images-1.medium.com/max/800/1*Mo_rql6w8u44MJ1FAMmD5g.png',
    avatar: 'https://cdn-images-1.medium.com/fit/c/32/32/0*H2-pu-Hmgmdhw2sp.jpg',
    name: 'TJ Monserrat'
  },
  {
    title: 'Playing with my own Polymer Appshell',
    summary: 'So a little bit of a report using my new appshell using Polymer and Firebase:',
    date: 'Jul 29',
    read: 4,
    avatar: 'https://cdn-images-1.medium.com/fit/c/32/32/0*H2-pu-Hmgmdhw2sp.jpg',
    name: 'TJ Monserrat'
  },
  {
    title: 'People Learn through Experiences: Meeting the Greatest Minds in Computer Science',
    summary: 'I just came from an event called ACM’s A. M. Turing Award turns 50: Celebrating 50 Years of Computing’s Greatest Achievements here in San…',
    date: 'Jul 13',
    read: 13,
    image: 'https://cdn-images-1.medium.com/max/800/1*-0gMEzZ6zQWMdVeVoy78DQ.jpeg',
    avatar: 'https://cdn-images-1.medium.com/fit/c/32/32/0*H2-pu-Hmgmdhw2sp.jpg',
    name: 'TJ Monserrat'
  },
  {
    title: 'Documentation on running React Native with Firebase on a Ubuntu Virtual Box on Windows',
    summary: 'This post is about me trying to remember what would be the prerequisites of creating your own first Firebase React Native App running on…',
    date: 'Jul 9',
    read: 13,
    avatar: 'https://cdn-images-1.medium.com/fit/c/32/32/0*H2-pu-Hmgmdhw2sp.jpg',
    name: 'TJ Monserrat'
  }
]

class Page extends Element {
  static get is () { return 'landing-page'; }

  static get properties () {
    return {
      bannerImage: {
        type: String,
        readOnly: true,
        value: bannerImage
      },
      thumbnailBannerImage: {
        type: String,
        readOnly: true,
        value: thumbnailBannerImage
      },
      articles: {
        type: Array,
        readOnly: true,
        value: articles
      }
    };
  }
}

!customElements.get(Page.is)
  ? customElements.define(Page.is, Page)
  : console.warn(`${Page.is} is already defined`);
