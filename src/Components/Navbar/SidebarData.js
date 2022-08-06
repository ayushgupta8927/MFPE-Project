import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Offers',
    path: '/add',
    icon: <IoIcons.IoIosAdd />,
    cName: 'nav-text'
  },
  {
    title: 'View Employee List',
    path: '/employee',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Login',
  //   path: '/',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Edit OFfer',
    path: '/edit',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Engage Offer ',
    path:'/engageOffer',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Like Offer ',
    path:'/likeOffer',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Product by Offer Id',
    path: '/ShowProductById',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Product by Category',
    path: '/ShowProductByCategory',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Product by Top3 likes',
    path: '/ShowProductByTopLikes',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Product by Posted Date',
    path: '/ShowProductByPostedDate',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
  },
  {
    title: 'View by profile id',
    path:'/ViewEmployeeOffers',
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: 'nav-text'
},
// {
//     title: 'GetPoints ',
//     path:'/GetPointsList',
//     icon: <AiIcons.AiOutlineUserAdd />,
//     cName: 'nav-text'
// },
{
  title: 'View Points ',
  path:'/ViewPointsById',
  icon: <AiIcons.AiOutlineUserAdd />,
  cName: 'nav-text'
},
{
  title: 'ViewMostliked ',
  path:'/ViewMostLikedOffers',
  icon: <AiIcons.AiOutlineUserAdd />,
  cName: 'nav-text'
},{
  title: 'Resfresh Points by Employee ',
  path:'/RefreshPoint',
  icon: <AiIcons.AiOutlineUserAdd />,
  cName: 'nav-text'
}

];